import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CvssAttackComplexityEnum {
    AttackComplexityUnspecified = "ATTACK_COMPLEXITY_UNSPECIFIED",
    AttackComplexityLow = "ATTACK_COMPLEXITY_LOW",
    AttackComplexityHigh = "ATTACK_COMPLEXITY_HIGH"
}

export enum CvssAttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED",
    AttackVectorNetwork = "ATTACK_VECTOR_NETWORK",
    AttackVectorAdjacent = "ATTACK_VECTOR_ADJACENT",
    AttackVectorLocal = "ATTACK_VECTOR_LOCAL",
    AttackVectorPhysical = "ATTACK_VECTOR_PHYSICAL"
}

export enum CvssAuthenticationEnum {
    AuthenticationUnspecified = "AUTHENTICATION_UNSPECIFIED",
    AuthenticationMultiple = "AUTHENTICATION_MULTIPLE",
    AuthenticationSingle = "AUTHENTICATION_SINGLE",
    AuthenticationNone = "AUTHENTICATION_NONE"
}

export enum CvssAvailabilityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}

export enum CvssConfidentialityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}

export enum CvssIntegrityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}

export enum CvssPrivilegesRequiredEnum {
    PrivilegesRequiredUnspecified = "PRIVILEGES_REQUIRED_UNSPECIFIED",
    PrivilegesRequiredNone = "PRIVILEGES_REQUIRED_NONE",
    PrivilegesRequiredLow = "PRIVILEGES_REQUIRED_LOW",
    PrivilegesRequiredHigh = "PRIVILEGES_REQUIRED_HIGH"
}

export enum CvssScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeUnchanged = "SCOPE_UNCHANGED",
    ScopeChanged = "SCOPE_CHANGED"
}

export enum CvssUserInteractionEnum {
    UserInteractionUnspecified = "USER_INTERACTION_UNSPECIFIED",
    UserInteractionNone = "USER_INTERACTION_NONE",
    UserInteractionRequired = "USER_INTERACTION_REQUIRED"
}


// Cvss
/** 
 * Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.
**/
export class Cvss extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attackComplexity" })
  attackComplexity?: CvssAttackComplexityEnum;

  @SpeakeasyMetadata({ data: "json, name=attackVector" })
  attackVector?: CvssAttackVectorEnum;

  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication?: CvssAuthenticationEnum;

  @SpeakeasyMetadata({ data: "json, name=availabilityImpact" })
  availabilityImpact?: CvssAvailabilityImpactEnum;

  @SpeakeasyMetadata({ data: "json, name=baseScore" })
  baseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=confidentialityImpact" })
  confidentialityImpact?: CvssConfidentialityImpactEnum;

  @SpeakeasyMetadata({ data: "json, name=exploitabilityScore" })
  exploitabilityScore?: number;

  @SpeakeasyMetadata({ data: "json, name=impactScore" })
  impactScore?: number;

  @SpeakeasyMetadata({ data: "json, name=integrityImpact" })
  integrityImpact?: CvssIntegrityImpactEnum;

  @SpeakeasyMetadata({ data: "json, name=privilegesRequired" })
  privilegesRequired?: CvssPrivilegesRequiredEnum;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: CvssScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=userInteraction" })
  userInteraction?: CvssUserInteractionEnum;
}
