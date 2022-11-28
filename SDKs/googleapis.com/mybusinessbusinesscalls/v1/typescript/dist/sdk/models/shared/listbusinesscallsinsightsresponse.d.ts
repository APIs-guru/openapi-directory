import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessCallsInsights } from "./businesscallsinsights";
/**
 * Response message for ListBusinessCallsInsights.
**/
export declare class ListBusinessCallsInsightsResponse extends SpeakeasyBase {
    businessCallsInsights?: BusinessCallsInsights[];
    nextPageToken?: string;
}
