import { SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
/**
 * A single strongly-typed value.
**/
export declare class TypedValue extends SpeakeasyBase {
    boolValue?: boolean;
    distributionValue?: Distribution;
    doubleValue?: number;
    int64Value?: string;
    stringValue?: string;
}
