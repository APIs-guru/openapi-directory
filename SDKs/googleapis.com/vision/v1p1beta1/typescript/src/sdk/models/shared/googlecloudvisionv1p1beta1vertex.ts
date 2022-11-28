import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1Vertex
/** 
 * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
**/
export class GoogleCloudVisionV1p1beta1Vertex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}
