import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsCardV1IconImageTypeEnum {
    Square = "SQUARE",
    Circle = "CIRCLE"
}
/**
 * An icon displayed in a widget on a card. Supports [standard](https://developers.google.com/chat/api/guides/message-formats/cards) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
**/
export declare class GoogleAppsCardV1Icon extends SpeakeasyBase {
    altText?: string;
    iconUrl?: string;
    imageType?: GoogleAppsCardV1IconImageTypeEnum;
    knownIcon?: string;
}
