import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1ImageCropStyle } from "./googleappscardv1imagecropstyle";



// GoogleAppsCardV1ImageComponent
/** 
 * Represents an image.
**/
export class GoogleAppsCardV1ImageComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altText" })
  altText?: string;

  @SpeakeasyMetadata({ data: "json, name=borderStyle" })
  borderStyle?: GoogleAppsCardV1BorderStyle;

  @SpeakeasyMetadata({ data: "json, name=cropStyle" })
  cropStyle?: GoogleAppsCardV1ImageCropStyle;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;
}
