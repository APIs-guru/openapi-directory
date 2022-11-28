import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Translates to IAM Policy bindings (without auditing at this level)
**/
export declare class PolicyBinding extends SpeakeasyBase {
    members?: string[];
    role?: string;
}
