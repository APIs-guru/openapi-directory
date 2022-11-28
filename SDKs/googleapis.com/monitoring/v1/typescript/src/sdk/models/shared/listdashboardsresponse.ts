import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dashboard } from "./dashboard";



// ListDashboardsResponse
/** 
 * The ListDashboards request.
**/
export class ListDashboardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboards", elemType: Dashboard })
  dashboards?: Dashboard[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
