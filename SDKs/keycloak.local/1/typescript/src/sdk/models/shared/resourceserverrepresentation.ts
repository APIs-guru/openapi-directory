import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyRepresentation } from "./policyrepresentation";
import { ResourceRepresentation } from "./resourcerepresentation";
import { ScopeRepresentation } from "./scoperepresentation";

export enum ResourceServerRepresentationDecisionStrategyEnum {
    Affirmative = "AFFIRMATIVE"
,    Unanimous = "UNANIMOUS"
,    Consensus = "CONSENSUS"
}

export enum ResourceServerRepresentationPolicyEnforcementModeEnum {
    Enforcing = "ENFORCING"
,    Permissive = "PERMISSIVE"
,    Disabled = "DISABLED"
}


export class ResourceServerRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowRemoteResourceManagement" })
  allowRemoteResourceManagement?: boolean;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=decisionStrategy" })
  decisionStrategy?: ResourceServerRepresentationDecisionStrategyEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.PolicyRepresentation })
  policies?: PolicyRepresentation[];

  @Metadata({ data: "json, name=policyEnforcementMode" })
  policyEnforcementMode?: ResourceServerRepresentationPolicyEnforcementModeEnum;

  @Metadata({ data: "json, name=resources", elemType: shared.ResourceRepresentation })
  resources?: ResourceRepresentation[];

  @Metadata({ data: "json, name=scopes", elemType: shared.ScopeRepresentation })
  scopes?: ScopeRepresentation[];
}
