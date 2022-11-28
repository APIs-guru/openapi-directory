import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CropProperties
/** 
 * The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.
**/
export class CropProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=angle" })
  angle?: number;

  @SpeakeasyMetadata({ data: "json, name=offsetBottom" })
  offsetBottom?: number;

  @SpeakeasyMetadata({ data: "json, name=offsetLeft" })
  offsetLeft?: number;

  @SpeakeasyMetadata({ data: "json, name=offsetRight" })
  offsetRight?: number;

  @SpeakeasyMetadata({ data: "json, name=offsetTop" })
  offsetTop?: number;
}
