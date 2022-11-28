import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1MarkInsightAcceptedRequest
/** 
 * Request for the `MarkInsightAccepted` method.
**/
export class GoogleCloudRecommenderV1MarkInsightAcceptedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMetadata" })
  stateMetadata?: Map<string, string>;
}
