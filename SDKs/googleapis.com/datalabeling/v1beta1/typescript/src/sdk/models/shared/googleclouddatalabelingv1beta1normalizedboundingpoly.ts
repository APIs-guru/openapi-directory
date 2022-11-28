import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1NormalizedVertex } from "./googleclouddatalabelingv1beta1normalizedvertex";



// GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly
/** 
 * Normalized bounding polygon.
**/
export class GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=normalizedVertices", elemType: GoogleCloudDatalabelingV1beta1NormalizedVertex })
  normalizedVertices?: GoogleCloudDatalabelingV1beta1NormalizedVertex[];
}
