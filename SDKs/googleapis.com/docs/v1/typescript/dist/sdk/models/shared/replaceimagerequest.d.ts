import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReplaceImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    CenterCrop = "CENTER_CROP"
}
/**
 * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
**/
export declare class ReplaceImageRequest extends SpeakeasyBase {
    imageObjectId?: string;
    imageReplaceMethod?: ReplaceImageRequestImageReplaceMethodEnum;
    uri?: string;
}
