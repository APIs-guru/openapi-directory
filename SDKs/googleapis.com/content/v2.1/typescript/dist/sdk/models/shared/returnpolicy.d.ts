import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyPolicy } from "./returnpolicypolicy";
import { Price } from "./price";
import { ReturnPolicySeasonalOverride } from "./returnpolicyseasonaloverride";
/**
 * Return policy resource.
**/
export declare class ReturnPolicy extends SpeakeasyBase {
    country?: string;
    kind?: string;
    label?: string;
    name?: string;
    nonFreeReturnReasons?: string[];
    policy?: ReturnPolicyPolicy;
    returnPolicyId?: string;
    returnShippingFee?: Price;
    seasonalOverrides?: ReturnPolicySeasonalOverride[];
}
