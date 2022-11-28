import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyRepresentation } from "./policyrepresentation";
import { ResourceRepresentation } from "./resourcerepresentation";
import { ScopeRepresentation } from "./scoperepresentation";


export enum ResourceServerRepresentationDecisionStrategyEnum {
    Affirmative = "AFFIRMATIVE",
    Unanimous = "UNANIMOUS",
    Consensus = "CONSENSUS"
}

export enum ResourceServerRepresentationPolicyEnforcementModeEnum {
    Enforcing = "ENFORCING",
    Permissive = "PERMISSIVE",
    Disabled = "DISABLED"
}


export class ResourceServerRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowRemoteResourceManagement" })
  allowRemoteResourceManagement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=decisionStrategy" })
  decisionStrategy?: ResourceServerRepresentationDecisionStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: PolicyRepresentation })
  policies?: PolicyRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=policyEnforcementMode" })
  policyEnforcementMode?: ResourceServerRepresentationPolicyEnforcementModeEnum;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ResourceRepresentation })
  resources?: ResourceRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=scopes", elemType: ScopeRepresentation })
  scopes?: ScopeRepresentation[];
}
