import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1ImageCropStyle } from "./googleappscardv1imagecropstyle";


// GoogleAppsCardV1ImageComponent
/** 
 * Represents an image.
**/
export class GoogleAppsCardV1ImageComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=altText" })
  altText?: string;

  @Metadata({ data: "json, name=borderStyle" })
  borderStyle?: GoogleAppsCardV1BorderStyle;

  @Metadata({ data: "json, name=cropStyle" })
  cropStyle?: GoogleAppsCardV1ImageCropStyle;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;
}
