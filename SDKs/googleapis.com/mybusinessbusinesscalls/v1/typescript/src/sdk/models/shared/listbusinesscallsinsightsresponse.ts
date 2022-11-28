import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BusinessCallsInsights } from "./businesscallsinsights";



// ListBusinessCallsInsightsResponse
/** 
 * Response message for ListBusinessCallsInsights.
**/
export class ListBusinessCallsInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessCallsInsights", elemType: BusinessCallsInsights })
  businessCallsInsights?: BusinessCallsInsights[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
