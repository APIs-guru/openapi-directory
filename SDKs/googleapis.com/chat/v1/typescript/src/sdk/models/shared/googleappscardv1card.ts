import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1CardAction } from "./googleappscardv1cardaction";
import { GoogleAppsCardV1CardFixedFooter } from "./googleappscardv1cardfixedfooter";
import { GoogleAppsCardV1CardHeader } from "./googleappscardv1cardheader";
import { GoogleAppsCardV1Section } from "./googleappscardv1section";


export enum GoogleAppsCardV1CardDisplayStyleEnum {
    DisplayStyleUnspecified = "DISPLAY_STYLE_UNSPECIFIED",
    Peek = "PEEK",
    Replace = "REPLACE"
}


// GoogleAppsCardV1Card
/** 
 * Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a "contact card" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```
**/
export class GoogleAppsCardV1Card extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardActions", elemType: GoogleAppsCardV1CardAction })
  cardActions?: GoogleAppsCardV1CardAction[];

  @SpeakeasyMetadata({ data: "json, name=displayStyle" })
  displayStyle?: GoogleAppsCardV1CardDisplayStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=fixedFooter" })
  fixedFooter?: GoogleAppsCardV1CardFixedFooter;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: GoogleAppsCardV1CardHeader;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=peekCardHeader" })
  peekCardHeader?: GoogleAppsCardV1CardHeader;

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: GoogleAppsCardV1Section })
  sections?: GoogleAppsCardV1Section[];
}
