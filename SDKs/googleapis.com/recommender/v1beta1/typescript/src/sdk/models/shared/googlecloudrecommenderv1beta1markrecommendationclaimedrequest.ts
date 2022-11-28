import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest
/** 
 * Request for the `MarkRecommendationClaimed` Method.
**/
export class GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
