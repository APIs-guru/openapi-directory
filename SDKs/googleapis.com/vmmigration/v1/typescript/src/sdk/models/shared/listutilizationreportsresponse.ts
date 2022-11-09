import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UtilizationReport } from "./utilizationreport";


// ListUtilizationReportsResponse
/** 
 * Response message for 'ListUtilizationReports' request.
**/
export class ListUtilizationReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];

  @Metadata({ data: "json, name=utilizationReports", elemType: shared.UtilizationReport })
  utilizationReports?: UtilizationReport[];
}
