import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CvsSv3AttackComplexityEnum {
    AttackComplexityUnspecified = "ATTACK_COMPLEXITY_UNSPECIFIED",
    AttackComplexityLow = "ATTACK_COMPLEXITY_LOW",
    AttackComplexityHigh = "ATTACK_COMPLEXITY_HIGH"
}
export declare enum CvsSv3AttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED",
    AttackVectorNetwork = "ATTACK_VECTOR_NETWORK",
    AttackVectorAdjacent = "ATTACK_VECTOR_ADJACENT",
    AttackVectorLocal = "ATTACK_VECTOR_LOCAL",
    AttackVectorPhysical = "ATTACK_VECTOR_PHYSICAL"
}
export declare enum CvsSv3AvailabilityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CvsSv3ConfidentialityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CvsSv3IntegrityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CvsSv3PrivilegesRequiredEnum {
    PrivilegesRequiredUnspecified = "PRIVILEGES_REQUIRED_UNSPECIFIED",
    PrivilegesRequiredNone = "PRIVILEGES_REQUIRED_NONE",
    PrivilegesRequiredLow = "PRIVILEGES_REQUIRED_LOW",
    PrivilegesRequiredHigh = "PRIVILEGES_REQUIRED_HIGH"
}
export declare enum CvsSv3ScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeUnchanged = "SCOPE_UNCHANGED",
    ScopeChanged = "SCOPE_CHANGED"
}
export declare enum CvsSv3UserInteractionEnum {
    UserInteractionUnspecified = "USER_INTERACTION_UNSPECIFIED",
    UserInteractionNone = "USER_INTERACTION_NONE",
    UserInteractionRequired = "USER_INTERACTION_REQUIRED"
}
/**
 * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
**/
export declare class CvsSv3 extends SpeakeasyBase {
    attackComplexity?: CvsSv3AttackComplexityEnum;
    attackVector?: CvsSv3AttackVectorEnum;
    availabilityImpact?: CvsSv3AvailabilityImpactEnum;
    baseScore?: number;
    confidentialityImpact?: CvsSv3ConfidentialityImpactEnum;
    exploitabilityScore?: number;
    impactScore?: number;
    integrityImpact?: CvsSv3IntegrityImpactEnum;
    privilegesRequired?: CvsSv3PrivilegesRequiredEnum;
    scope?: CvsSv3ScopeEnum;
    userInteraction?: CvsSv3UserInteractionEnum;
}
