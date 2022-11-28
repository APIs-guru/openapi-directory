import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportKey } from "./reportkey";
import { ReportMetadata } from "./reportmetadata";
import { Parameters } from "./parameters";



// Report
/** 
 * Represents a report.
**/
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: ReportKey;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ReportMetadata;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Parameters;
}
