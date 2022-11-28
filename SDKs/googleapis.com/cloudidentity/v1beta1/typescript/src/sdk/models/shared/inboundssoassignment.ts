import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamlSsoInfo } from "./samlssoinfo";
import { SignInBehavior } from "./signinbehavior";


export enum InboundSsoAssignmentSsoModeEnum {
    SsoModeUnspecified = "SSO_MODE_UNSPECIFIED",
    SsoOff = "SSO_OFF",
    SamlSso = "SAML_SSO",
    DomainWideSamlIfEnabled = "DOMAIN_WIDE_SAML_IF_ENABLED"
}


// InboundSsoAssignment
/** 
 * Targets with "set" SSO assignments and their respective assignments.
**/
export class InboundSsoAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=samlSsoInfo" })
  samlSsoInfo?: SamlSsoInfo;

  @SpeakeasyMetadata({ data: "json, name=signInBehavior" })
  signInBehavior?: SignInBehavior;

  @SpeakeasyMetadata({ data: "json, name=ssoMode" })
  ssoMode?: InboundSsoAssignmentSsoModeEnum;

  @SpeakeasyMetadata({ data: "json, name=targetGroup" })
  targetGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=targetOrgUnit" })
  targetOrgUnit?: string;
}


// InboundSsoAssignmentInput
/** 
 * Targets with "set" SSO assignments and their respective assignments.
**/
export class InboundSsoAssignmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=samlSsoInfo" })
  samlSsoInfo?: SamlSsoInfo;

  @SpeakeasyMetadata({ data: "json, name=signInBehavior" })
  signInBehavior?: SignInBehavior;

  @SpeakeasyMetadata({ data: "json, name=ssoMode" })
  ssoMode?: InboundSsoAssignmentSsoModeEnum;

  @SpeakeasyMetadata({ data: "json, name=targetGroup" })
  targetGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=targetOrgUnit" })
  targetOrgUnit?: string;
}
