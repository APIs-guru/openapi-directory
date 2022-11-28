import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationAttemptInfo } from "./authorizationattemptinfo";
import { ProvisioningIssue } from "./provisioningissue";


export enum ManagedCertificateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Failed = "FAILED",
    Active = "ACTIVE"
}


// ManagedCertificate
/** 
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
**/
export class ManagedCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationAttemptInfo", elemType: AuthorizationAttemptInfo })
  authorizationAttemptInfo?: AuthorizationAttemptInfo[];

  @SpeakeasyMetadata({ data: "json, name=dnsAuthorizations" })
  dnsAuthorizations?: string[];

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=issuanceConfig" })
  issuanceConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningIssue" })
  provisioningIssue?: ProvisioningIssue;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ManagedCertificateStateEnum;
}


// ManagedCertificateInput
/** 
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
**/
export class ManagedCertificateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsAuthorizations" })
  dnsAuthorizations?: string[];

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=issuanceConfig" })
  issuanceConfig?: string;
}
