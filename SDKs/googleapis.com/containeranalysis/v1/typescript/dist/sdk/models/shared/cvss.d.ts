import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CvssAttackComplexityEnum {
    AttackComplexityUnspecified = "ATTACK_COMPLEXITY_UNSPECIFIED",
    AttackComplexityLow = "ATTACK_COMPLEXITY_LOW",
    AttackComplexityHigh = "ATTACK_COMPLEXITY_HIGH"
}
export declare enum CvssAttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED",
    AttackVectorNetwork = "ATTACK_VECTOR_NETWORK",
    AttackVectorAdjacent = "ATTACK_VECTOR_ADJACENT",
    AttackVectorLocal = "ATTACK_VECTOR_LOCAL",
    AttackVectorPhysical = "ATTACK_VECTOR_PHYSICAL"
}
export declare enum CvssAuthenticationEnum {
    AuthenticationUnspecified = "AUTHENTICATION_UNSPECIFIED",
    AuthenticationMultiple = "AUTHENTICATION_MULTIPLE",
    AuthenticationSingle = "AUTHENTICATION_SINGLE",
    AuthenticationNone = "AUTHENTICATION_NONE"
}
export declare enum CvssAvailabilityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CvssConfidentialityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CvssIntegrityImpactEnum {
    ImpactUnspecified = "IMPACT_UNSPECIFIED",
    ImpactHigh = "IMPACT_HIGH",
    ImpactLow = "IMPACT_LOW",
    ImpactNone = "IMPACT_NONE"
}
export declare enum CvssPrivilegesRequiredEnum {
    PrivilegesRequiredUnspecified = "PRIVILEGES_REQUIRED_UNSPECIFIED",
    PrivilegesRequiredNone = "PRIVILEGES_REQUIRED_NONE",
    PrivilegesRequiredLow = "PRIVILEGES_REQUIRED_LOW",
    PrivilegesRequiredHigh = "PRIVILEGES_REQUIRED_HIGH"
}
export declare enum CvssScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeUnchanged = "SCOPE_UNCHANGED",
    ScopeChanged = "SCOPE_CHANGED"
}
export declare enum CvssUserInteractionEnum {
    UserInteractionUnspecified = "USER_INTERACTION_UNSPECIFIED",
    UserInteractionNone = "USER_INTERACTION_NONE",
    UserInteractionRequired = "USER_INTERACTION_REQUIRED"
}
/**
 * Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.
**/
export declare class Cvss extends SpeakeasyBase {
    attackComplexity?: CvssAttackComplexityEnum;
    attackVector?: CvssAttackVectorEnum;
    authentication?: CvssAuthenticationEnum;
    availabilityImpact?: CvssAvailabilityImpactEnum;
    baseScore?: number;
    confidentialityImpact?: CvssConfidentialityImpactEnum;
    exploitabilityScore?: number;
    impactScore?: number;
    integrityImpact?: CvssIntegrityImpactEnum;
    privilegesRequired?: CvssPrivilegesRequiredEnum;
    scope?: CvssScopeEnum;
    userInteraction?: CvssUserInteractionEnum;
}
