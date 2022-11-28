import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportError } from "./reporterror";



// ReportResponse
/** 
 * Response message for the Report method.
**/
export class ReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportErrors", elemType: ReportError })
  reportErrors?: ReportError[];

  @SpeakeasyMetadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceRolloutId" })
  serviceRolloutId?: string;
}
