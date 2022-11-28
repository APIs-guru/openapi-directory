import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";



// GoogleAppsCardV1CardFixedFooter
/** 
 * A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. Chat apps support `fixedFooter` in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not in [card messages](https://developers.google.com/chat/api/guides/message-formats/cards).
**/
export class GoogleAppsCardV1CardFixedFooter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primaryButton" })
  primaryButton?: GoogleAppsCardV1Button;

  @SpeakeasyMetadata({ data: "json, name=secondaryButton" })
  secondaryButton?: GoogleAppsCardV1Button;
}
