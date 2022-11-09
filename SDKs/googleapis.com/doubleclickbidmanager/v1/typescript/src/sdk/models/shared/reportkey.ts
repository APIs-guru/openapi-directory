import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportKey
/** 
 * Key used to identify a report.
**/
export class ReportKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryId" })
  queryId?: string;

  @Metadata({ data: "json, name=reportId" })
  reportId?: string;
}
