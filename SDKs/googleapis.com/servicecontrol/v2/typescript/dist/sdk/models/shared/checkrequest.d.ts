import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeContext } from "./attributecontext";
import { ResourceInfo } from "./resourceinfo";
/**
 * Request message for the Check method.
**/
export declare class CheckRequest extends SpeakeasyBase {
    attributes?: AttributeContext;
    flags?: string;
    resources?: ResourceInfo[];
    serviceConfigId?: string;
}
