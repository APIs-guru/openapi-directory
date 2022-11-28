import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationAttemptInfo } from "./authorizationattemptinfo";
import { ProvisioningIssue } from "./provisioningissue";
export declare enum ManagedCertificateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Failed = "FAILED",
    Active = "ACTIVE"
}
/**
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
**/
export declare class ManagedCertificate extends SpeakeasyBase {
    authorizationAttemptInfo?: AuthorizationAttemptInfo[];
    dnsAuthorizations?: string[];
    domains?: string[];
    issuanceConfig?: string;
    provisioningIssue?: ProvisioningIssue;
    state?: ManagedCertificateStateEnum;
}
/**
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
**/
export declare class ManagedCertificateInput extends SpeakeasyBase {
    dnsAuthorizations?: string[];
    domains?: string[];
    issuanceConfig?: string;
}
