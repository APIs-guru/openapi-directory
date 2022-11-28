import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyRepresentation } from "./policyrepresentation";
import { ResourceRepresentation } from "./resourcerepresentation";
import { ScopeRepresentation } from "./scoperepresentation";
export declare enum ResourceServerRepresentationDecisionStrategyEnum {
    Affirmative = "AFFIRMATIVE",
    Unanimous = "UNANIMOUS",
    Consensus = "CONSENSUS"
}
export declare enum ResourceServerRepresentationPolicyEnforcementModeEnum {
    Enforcing = "ENFORCING",
    Permissive = "PERMISSIVE",
    Disabled = "DISABLED"
}
export declare class ResourceServerRepresentation extends SpeakeasyBase {
    allowRemoteResourceManagement?: boolean;
    clientId?: string;
    decisionStrategy?: ResourceServerRepresentationDecisionStrategyEnum;
    id?: string;
    name?: string;
    policies?: PolicyRepresentation[];
    policyEnforcementMode?: ResourceServerRepresentationPolicyEnforcementModeEnum;
    resources?: ResourceRepresentation[];
    scopes?: ScopeRepresentation[];
}
