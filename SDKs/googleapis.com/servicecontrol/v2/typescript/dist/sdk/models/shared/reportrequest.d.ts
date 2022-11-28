import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeContext } from "./attributecontext";
/**
 * Request message for the Report method.
**/
export declare class ReportRequest extends SpeakeasyBase {
    operations?: AttributeContext[];
    serviceConfigId?: string;
}
