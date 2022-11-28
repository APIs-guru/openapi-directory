import { SpeakeasyBase } from "../../../internal/utils";
import { AccessSelector } from "./accessselector";
import { IdentitySelector } from "./identityselector";
import { ResourceSelector } from "./resourceselector";
/**
 * IAM policy analysis query message.
**/
export declare class IamPolicyAnalysisQuery extends SpeakeasyBase {
    accessSelector?: AccessSelector;
    identitySelector?: IdentitySelector;
    parent?: string;
    resourceSelector?: ResourceSelector;
}
