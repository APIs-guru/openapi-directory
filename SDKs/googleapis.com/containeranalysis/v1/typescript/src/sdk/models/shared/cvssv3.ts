import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CvsSv3AttackComplexityEnum {
    AttackComplexityUnspecified = "ATTACK_COMPLEXITY_UNSPECIFIED",
    AttackComplexityLow = "ATTACK_COMPLEXITY_LOW",
    AttackComplexityHigh = "ATTACK_COMPLEXITY_HIGH"
}

export enum CvsSv3AttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED",
    AttackVectorNetwork = "ATTACK_VECTOR_NETWORK",
    AttackVectorAdjacent = "ATTACK_VECTOR_ADJACENT",
    AttackVectorLocal = "ATTACK_VECTOR_LOCAL",
    AttackVectorPhysical = "ATTACK_VECTOR_PHYSICAL"
}

export enum CvsSv3AvailabilityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}

export enum CvsSv3ConfidentialityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}

export enum CvsSv3IntegrityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}

export enum CvsSv3PrivilegesRequiredEnum {
    PrivilegesRequiredUnspecified = "PRIVILEGES_REQUIRED_UNSPECIFIED",
    PrivilegesRequiredNone = "PRIVILEGES_REQUIRED_NONE",
    PrivilegesRequiredLow = "PRIVILEGES_REQUIRED_LOW",
    PrivilegesRequiredHigh = "PRIVILEGES_REQUIRED_HIGH"
}

export enum CvsSv3ScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeUnchanged = "SCOPE_UNCHANGED",
    ScopeChanged = "SCOPE_CHANGED"
}

export enum CvsSv3UserInteractionEnum {
    UserInteractionUnspecified = "USER_INTERACTION_UNSPECIFIED",
    UserInteractionNone = "USER_INTERACTION_NONE",
    UserInteractionRequired = "USER_INTERACTION_REQUIRED"
}


// CvsSv3
/** 
 * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
**/
export class CvsSv3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attackComplexity" })
  attackComplexity?: CvsSv3AttackComplexityEnum;

  @SpeakeasyMetadata({ data: "json, name=attackVector" })
  attackVector?: CvsSv3AttackVectorEnum;

  @SpeakeasyMetadata({ data: "json, name=availabilityImpact" })
  availabilityImpact?: CvsSv3AvailabilityImpactEnum;

  @SpeakeasyMetadata({ data: "json, name=baseScore" })
  baseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=confidentialityImpact" })
  confidentialityImpact?: CvsSv3ConfidentialityImpactEnum;

  @SpeakeasyMetadata({ data: "json, name=exploitabilityScore" })
  exploitabilityScore?: number;

  @SpeakeasyMetadata({ data: "json, name=impactScore" })
  impactScore?: number;

  @SpeakeasyMetadata({ data: "json, name=integrityImpact" })
  integrityImpact?: CvsSv3IntegrityImpactEnum;

  @SpeakeasyMetadata({ data: "json, name=privilegesRequired" })
  privilegesRequired?: CvsSv3PrivilegesRequiredEnum;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: CvsSv3ScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=userInteraction" })
  userInteraction?: CvsSv3UserInteractionEnum;
}
