import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportKey
/** 
 * Key used to identify a report.
**/
export class ReportKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryId" })
  queryId?: string;

  @SpeakeasyMetadata({ data: "json, name=reportId" })
  reportId?: string;
}
