import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceRepresentation } from "./resourcerepresentation";
import { ScopeRepresentation } from "./scoperepresentation";

export enum PolicyRepresentationDecisionStrategyEnum {
    Affirmative = "AFFIRMATIVE"
,    Unanimous = "UNANIMOUS"
,    Consensus = "CONSENSUS"
}

export enum PolicyRepresentationLogicEnum {
    Positive = "POSITIVE"
,    Negative = "NEGATIVE"
}


export class PolicyRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=decisionStrategy" })
  decisionStrategy?: PolicyRepresentationDecisionStrategyEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logic" })
  logic?: PolicyRepresentationLogicEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=policies" })
  policies?: string[];

  @Metadata({ data: "json, name=resources" })
  resources?: string[];

  @Metadata({ data: "json, name=resourcesData", elemType: shared.ResourceRepresentation })
  resourcesData?: ResourceRepresentation[];

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=scopesData", elemType: shared.ScopeRepresentation })
  scopesData?: ScopeRepresentation[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
