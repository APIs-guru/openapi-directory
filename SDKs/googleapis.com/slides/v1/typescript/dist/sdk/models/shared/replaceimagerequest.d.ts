import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReplaceImageRequestImageReplaceMethodEnum {
    ImageReplaceMethodUnspecified = "IMAGE_REPLACE_METHOD_UNSPECIFIED",
    CenterInside = "CENTER_INSIDE",
    CenterCrop = "CENTER_CROP"
}
/**
 * Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.
**/
export declare class ReplaceImageRequest extends SpeakeasyBase {
    imageObjectId?: string;
    imageReplaceMethod?: ReplaceImageRequestImageReplaceMethodEnum;
    url?: string;
}
