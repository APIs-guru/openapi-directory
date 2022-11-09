import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BusinessCallsInsights } from "./businesscallsinsights";


// ListBusinessCallsInsightsResponse
/** 
 * Response message for ListBusinessCallsInsights.
**/
export class ListBusinessCallsInsightsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessCallsInsights", elemType: shared.BusinessCallsInsights })
  businessCallsInsights?: BusinessCallsInsights[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
