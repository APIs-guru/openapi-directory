import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsCardV1IconImageTypeEnum {
    Square = "SQUARE",
    Circle = "CIRCLE"
}


// GoogleAppsCardV1Icon
/** 
 * An icon displayed in a widget on a card. Supports [standard](https://developers.google.com/chat/api/guides/message-formats/cards) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
**/
export class GoogleAppsCardV1Icon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altText" })
  altText?: string;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: GoogleAppsCardV1IconImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=knownIcon" })
  knownIcon?: string;
}
