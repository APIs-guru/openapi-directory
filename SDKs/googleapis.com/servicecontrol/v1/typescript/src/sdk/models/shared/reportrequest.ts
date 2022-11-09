import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


// ReportRequest
/** 
 * Request message for the Report method.
**/
export class ReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
