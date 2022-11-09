import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dashboard } from "./dashboard";


// ListDashboardsResponse
/** 
 * The ListDashboards request.
**/
export class ListDashboardsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dashboards", elemType: shared.Dashboard })
  dashboards?: Dashboard[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
