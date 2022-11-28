import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request message for getting the effective guest policy assigned to the instance.
**/
export declare class LookupEffectiveGuestPolicyRequest extends SpeakeasyBase {
    osArchitecture?: string;
    osShortName?: string;
    osVersion?: string;
}
