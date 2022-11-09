import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1Vertex
/** 
 * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
**/
export class GoogleCloudDatalabelingV1beta1Vertex extends SpeakeasyBase {
  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;
}
