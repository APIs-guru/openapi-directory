import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest
/** 
 * Request for the `MarkInsightAccepted` method.
**/
export class GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
