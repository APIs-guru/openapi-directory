import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRepresentation } from "./resourcerepresentation";
import { ScopeRepresentation } from "./scoperepresentation";
export declare enum PolicyRepresentationDecisionStrategyEnum {
    Affirmative = "AFFIRMATIVE",
    Unanimous = "UNANIMOUS",
    Consensus = "CONSENSUS"
}
export declare enum PolicyRepresentationLogicEnum {
    Positive = "POSITIVE",
    Negative = "NEGATIVE"
}
export declare class PolicyRepresentation extends SpeakeasyBase {
    config?: Map<string, any>;
    decisionStrategy?: PolicyRepresentationDecisionStrategyEnum;
    description?: string;
    id?: string;
    logic?: PolicyRepresentationLogicEnum;
    name?: string;
    owner?: string;
    policies?: string[];
    resources?: string[];
    resourcesData?: ResourceRepresentation[];
    scopes?: string[];
    scopesData?: ScopeRepresentation[];
    type?: string;
}
