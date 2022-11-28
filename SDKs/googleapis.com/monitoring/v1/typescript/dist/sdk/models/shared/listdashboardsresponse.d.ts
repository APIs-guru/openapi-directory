import { SpeakeasyBase } from "../../../internal/utils";
import { Dashboard } from "./dashboard";
/**
 * The ListDashboards request.
**/
export declare class ListDashboardsResponse extends SpeakeasyBase {
    dashboards?: Dashboard[];
    nextPageToken?: string;
}
