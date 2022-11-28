import { SpeakeasyBase } from "../../../internal/utils";
import { AccessSelector } from "./accessselector";
import { ConditionContext } from "./conditioncontext";
import { IdentitySelector } from "./identityselector";
import { Options } from "./options";
import { ResourceSelector } from "./resourceselector";
/**
 * IAM policy analysis query message.
**/
export declare class IamPolicyAnalysisQuery extends SpeakeasyBase {
    accessSelector?: AccessSelector;
    conditionContext?: ConditionContext;
    identitySelector?: IdentitySelector;
    options?: Options;
    resourceSelector?: ResourceSelector;
    scope?: string;
}
