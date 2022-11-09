import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportError } from "./reporterror";


// ReportResponse
/** 
 * Response message for the Report method.
**/
export class ReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportErrors", elemType: shared.ReportError })
  reportErrors?: ReportError[];

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;

  @Metadata({ data: "json, name=serviceRolloutId" })
  serviceRolloutId?: string;
}
