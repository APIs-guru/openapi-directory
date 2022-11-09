import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Cvssv3AttackComplexityEnum {
    AttackComplexityUnspecified = "ATTACK_COMPLEXITY_UNSPECIFIED"
,    AttackComplexityLow = "ATTACK_COMPLEXITY_LOW"
,    AttackComplexityHigh = "ATTACK_COMPLEXITY_HIGH"
}

export enum Cvssv3AttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED"
,    AttackVectorNetwork = "ATTACK_VECTOR_NETWORK"
,    AttackVectorAdjacent = "ATTACK_VECTOR_ADJACENT"
,    AttackVectorLocal = "ATTACK_VECTOR_LOCAL"
,    AttackVectorPhysical = "ATTACK_VECTOR_PHYSICAL"
}

export enum Cvssv3AvailabilityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED"
,    ImpactHigh = "IMPACT_HIGH"
,    ImpactLow = "IMPACT_LOW"
,    ImpactNone = "IMPACT_NONE"
}

export enum Cvssv3ConfidentialityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED"
,    ImpactHigh = "IMPACT_HIGH"
,    ImpactLow = "IMPACT_LOW"
,    ImpactNone = "IMPACT_NONE"
}

export enum Cvssv3IntegrityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED"
,    ImpactHigh = "IMPACT_HIGH"
,    ImpactLow = "IMPACT_LOW"
,    ImpactNone = "IMPACT_NONE"
}

export enum Cvssv3PrivilegesRequiredEnum {
    PrivilegesRequiredUnspecified = "PRIVILEGES_REQUIRED_UNSPECIFIED"
,    PrivilegesRequiredNone = "PRIVILEGES_REQUIRED_NONE"
,    PrivilegesRequiredLow = "PRIVILEGES_REQUIRED_LOW"
,    PrivilegesRequiredHigh = "PRIVILEGES_REQUIRED_HIGH"
}

export enum Cvssv3ScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED"
,    ScopeUnchanged = "SCOPE_UNCHANGED"
,    ScopeChanged = "SCOPE_CHANGED"
}

export enum Cvssv3UserInteractionEnum {
    UserInteractionUnspecified = "USER_INTERACTION_UNSPECIFIED"
,    UserInteractionNone = "USER_INTERACTION_NONE"
,    UserInteractionRequired = "USER_INTERACTION_REQUIRED"
}


// Cvssv3
/** 
 * Common Vulnerability Scoring System version 3.
**/
export class Cvssv3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=attackComplexity" })
  attackComplexity?: Cvssv3AttackComplexityEnum;

  @Metadata({ data: "json, name=attackVector" })
  attackVector?: Cvssv3AttackVectorEnum;

  @Metadata({ data: "json, name=availabilityImpact" })
  availabilityImpact?: Cvssv3AvailabilityImpactEnum;

  @Metadata({ data: "json, name=baseScore" })
  baseScore?: number;

  @Metadata({ data: "json, name=confidentialityImpact" })
  confidentialityImpact?: Cvssv3ConfidentialityImpactEnum;

  @Metadata({ data: "json, name=integrityImpact" })
  integrityImpact?: Cvssv3IntegrityImpactEnum;

  @Metadata({ data: "json, name=privilegesRequired" })
  privilegesRequired?: Cvssv3PrivilegesRequiredEnum;

  @Metadata({ data: "json, name=scope" })
  scope?: Cvssv3ScopeEnum;

  @Metadata({ data: "json, name=userInteraction" })
  userInteraction?: Cvssv3UserInteractionEnum;
}
