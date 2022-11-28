import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest
/** 
 * Request message for PurgeUserEvents method.
**/
export class GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;
}
