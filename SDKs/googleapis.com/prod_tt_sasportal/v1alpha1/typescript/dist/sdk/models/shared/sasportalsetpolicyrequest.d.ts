import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalPolicy } from "./sasportalpolicy";
/**
 * Request message for `SetPolicy` method.
**/
export declare class SasPortalSetPolicyRequest extends SpeakeasyBase {
    disableNotification?: boolean;
    policy?: SasPortalPolicy;
    resource?: string;
}
