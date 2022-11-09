import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReplaceImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
,    CenterInside = "CENTER_INSIDE"
,    CenterCrop = "CENTER_CROP"
}


// ReplaceImageRequest
/** 
 * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.
**/
export class ReplaceImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageObjectId" })
  imageObjectId?: string;

  @Metadata({ data: "json, name=imageReplaceMethod" })
  imageReplaceMethod?: ReplaceImageRequestImageReplaceMethodEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
