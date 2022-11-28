import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeContext } from "./attributecontext";



// ReportRequest
/** 
 * Request message for the Report method.
**/
export class ReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operations", elemType: AttributeContext })
  operations?: AttributeContext[];

  @SpeakeasyMetadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;
}
