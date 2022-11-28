import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsCardV1CardHeaderImageTypeEnum {
    Square = "SQUARE",
    Circle = "CIRCLE"
}
/**
 * Represents a card header.
**/
export declare class GoogleAppsCardV1CardHeader extends SpeakeasyBase {
    imageAltText?: string;
    imageType?: GoogleAppsCardV1CardHeaderImageTypeEnum;
    imageUrl?: string;
    subtitle?: string;
    title?: string;
}
