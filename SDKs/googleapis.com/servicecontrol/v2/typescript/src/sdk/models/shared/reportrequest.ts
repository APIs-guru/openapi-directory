import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeContext } from "./attributecontext";


// ReportRequest
/** 
 * Request message for the Report method.
**/
export class ReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: shared.AttributeContext })
  operations?: AttributeContext[];

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
