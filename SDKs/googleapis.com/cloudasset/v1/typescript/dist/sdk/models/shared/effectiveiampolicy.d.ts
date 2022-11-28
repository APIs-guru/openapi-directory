import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyInfo } from "./policyinfo";
/**
 * The effective IAM policies on one resource.
**/
export declare class EffectiveIamPolicy extends SpeakeasyBase {
    fullResourceName?: string;
    policies?: PolicyInfo[];
}
