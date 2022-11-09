import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1NormalizedVertex } from "./googleclouddatalabelingv1beta1normalizedvertex";


// GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly
/** 
 * Normalized bounding polygon.
**/
export class GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly extends SpeakeasyBase {
  @Metadata({ data: "json, name=normalizedVertices", elemType: shared.GoogleCloudDatalabelingV1beta1NormalizedVertex })
  normalizedVertices?: GoogleCloudDatalabelingV1beta1NormalizedVertex[];
}
