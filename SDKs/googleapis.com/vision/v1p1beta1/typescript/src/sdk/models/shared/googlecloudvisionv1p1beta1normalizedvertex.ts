import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1NormalizedVertex
/** 
 * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
**/
export class GoogleCloudVisionV1p1beta1NormalizedVertex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}
