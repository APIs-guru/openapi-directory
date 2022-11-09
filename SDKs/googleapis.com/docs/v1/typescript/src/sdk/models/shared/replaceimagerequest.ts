import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReplaceImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
,    CenterCrop = "CENTER_CROP"
}


// ReplaceImageRequest
/** 
 * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
**/
export class ReplaceImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageObjectId" })
  imageObjectId?: string;

  @Metadata({ data: "json, name=imageReplaceMethod" })
  imageReplaceMethod?: ReplaceImageRequestImageReplaceMethodEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
