import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportKey } from "./reportkey";
import { ReportMetadata } from "./reportmetadata";
import { Parameters } from "./parameters";


// Report
/** 
 * Represents a report.
**/
export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: ReportKey;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ReportMetadata;

  @Metadata({ data: "json, name=params" })
  params?: Parameters;
}
