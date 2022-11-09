import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SamlSsoInfo } from "./samlssoinfo";
import { SignInBehavior } from "./signinbehavior";

export enum InboundSsoAssignmentSsoModeEnum {
    SsoModeUnspecified = "SSO_MODE_UNSPECIFIED"
,    SsoOff = "SSO_OFF"
,    SamlSso = "SAML_SSO"
,    DomainWideSamlIfEnabled = "DOMAIN_WIDE_SAML_IF_ENABLED"
}


// InboundSsoAssignment
/** 
 * Targets with "set" SSO assignments and their respective assignments.
**/
export class InboundSsoAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=samlSsoInfo" })
  samlSsoInfo?: SamlSsoInfo;

  @Metadata({ data: "json, name=signInBehavior" })
  signInBehavior?: SignInBehavior;

  @Metadata({ data: "json, name=ssoMode" })
  ssoMode?: InboundSsoAssignmentSsoModeEnum;

  @Metadata({ data: "json, name=targetGroup" })
  targetGroup?: string;

  @Metadata({ data: "json, name=targetOrgUnit" })
  targetOrgUnit?: string;
}
