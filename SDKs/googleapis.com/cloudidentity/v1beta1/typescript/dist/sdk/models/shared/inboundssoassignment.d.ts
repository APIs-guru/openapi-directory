import { SpeakeasyBase } from "../../../internal/utils";
import { SamlSsoInfo } from "./samlssoinfo";
import { SignInBehavior } from "./signinbehavior";
export declare enum InboundSsoAssignmentSsoModeEnum {
    SsoModeUnspecified = "SSO_MODE_UNSPECIFIED",
    SsoOff = "SSO_OFF",
    SamlSso = "SAML_SSO",
    DomainWideSamlIfEnabled = "DOMAIN_WIDE_SAML_IF_ENABLED"
}
/**
 * Targets with "set" SSO assignments and their respective assignments.
**/
export declare class InboundSsoAssignment extends SpeakeasyBase {
    customer?: string;
    name?: string;
    rank?: number;
    samlSsoInfo?: SamlSsoInfo;
    signInBehavior?: SignInBehavior;
    ssoMode?: InboundSsoAssignmentSsoModeEnum;
    targetGroup?: string;
    targetOrgUnit?: string;
}
/**
 * Targets with "set" SSO assignments and their respective assignments.
**/
export declare class InboundSsoAssignmentInput extends SpeakeasyBase {
    customer?: string;
    rank?: number;
    samlSsoInfo?: SamlSsoInfo;
    signInBehavior?: SignInBehavior;
    ssoMode?: InboundSsoAssignmentSsoModeEnum;
    targetGroup?: string;
    targetOrgUnit?: string;
}
