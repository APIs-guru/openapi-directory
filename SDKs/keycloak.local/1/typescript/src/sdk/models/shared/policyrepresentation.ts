import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceRepresentation } from "./resourcerepresentation";
import { ScopeRepresentation } from "./scoperepresentation";


export enum PolicyRepresentationDecisionStrategyEnum {
    Affirmative = "AFFIRMATIVE",
    Unanimous = "UNANIMOUS",
    Consensus = "CONSENSUS"
}

export enum PolicyRepresentationLogicEnum {
    Positive = "POSITIVE",
    Negative = "NEGATIVE"
}


export class PolicyRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=decisionStrategy" })
  decisionStrategy?: PolicyRepresentationDecisionStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logic" })
  logic?: PolicyRepresentationLogicEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=policies" })
  policies?: string[];

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourcesData", elemType: ResourceRepresentation })
  resourcesData?: ResourceRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=scopesData", elemType: ScopeRepresentation })
  scopesData?: ScopeRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
