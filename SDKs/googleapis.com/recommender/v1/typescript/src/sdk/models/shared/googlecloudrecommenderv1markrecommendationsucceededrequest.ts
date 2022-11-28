import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1MarkRecommendationSucceededRequest
/** 
 * Request for the `MarkRecommendationSucceeded` Method.
**/
export class GoogleCloudRecommenderV1MarkRecommendationSucceededRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
