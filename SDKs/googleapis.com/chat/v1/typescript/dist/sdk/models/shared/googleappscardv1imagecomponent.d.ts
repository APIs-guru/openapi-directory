import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1ImageCropStyle } from "./googleappscardv1imagecropstyle";
/**
 * Represents an image.
**/
export declare class GoogleAppsCardV1ImageComponent extends SpeakeasyBase {
    altText?: string;
    borderStyle?: GoogleAppsCardV1BorderStyle;
    cropStyle?: GoogleAppsCardV1ImageCropStyle;
    imageUri?: string;
}
