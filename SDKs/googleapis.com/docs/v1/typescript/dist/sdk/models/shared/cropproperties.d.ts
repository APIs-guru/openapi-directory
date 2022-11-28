import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.
**/
export declare class CropProperties extends SpeakeasyBase {
    angle?: number;
    offsetBottom?: number;
    offsetLeft?: number;
    offsetRight?: number;
    offsetTop?: number;
}
