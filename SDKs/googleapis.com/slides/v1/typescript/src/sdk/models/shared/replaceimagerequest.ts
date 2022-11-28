import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReplaceImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    CenterInside = "CENTER_INSIDE",
    CenterCrop = "CENTER_CROP"
}


// ReplaceImageRequest
/** 
 * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.
**/
export class ReplaceImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageObjectId" })
  imageObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=imageReplaceMethod" })
  imageReplaceMethod?: ReplaceImageRequestImageReplaceMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
