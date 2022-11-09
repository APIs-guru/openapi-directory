import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationAttemptInfo } from "./authorizationattemptinfo";
import { ProvisioningIssue } from "./provisioningissue";

export enum ManagedCertificateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Provisioning = "PROVISIONING"
,    Failed = "FAILED"
,    Active = "ACTIVE"
}


// ManagedCertificate
/** 
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
**/
export class ManagedCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationAttemptInfo", elemType: shared.AuthorizationAttemptInfo })
  authorizationAttemptInfo?: AuthorizationAttemptInfo[];

  @Metadata({ data: "json, name=dnsAuthorizations" })
  dnsAuthorizations?: string[];

  @Metadata({ data: "json, name=domains" })
  domains?: string[];

  @Metadata({ data: "json, name=issuanceConfig" })
  issuanceConfig?: string;

  @Metadata({ data: "json, name=provisioningIssue" })
  provisioningIssue?: ProvisioningIssue;

  @Metadata({ data: "json, name=state" })
  state?: ManagedCertificateStateEnum;
}
