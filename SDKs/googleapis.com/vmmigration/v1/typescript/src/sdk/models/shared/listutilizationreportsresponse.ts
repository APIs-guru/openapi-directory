import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UtilizationReport } from "./utilizationreport";



// ListUtilizationReportsResponse
/** 
 * Response message for 'ListUtilizationReports' request.
**/
export class ListUtilizationReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];

  @SpeakeasyMetadata({ data: "json, name=utilizationReports", elemType: UtilizationReport })
  utilizationReports?: UtilizationReport[];
}
