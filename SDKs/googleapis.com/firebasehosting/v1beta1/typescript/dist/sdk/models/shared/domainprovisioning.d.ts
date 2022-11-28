import { SpeakeasyBase } from "../../../internal/utils";
import { CertDnsChallenge } from "./certdnschallenge";
import { CertHttpChallenge } from "./certhttpchallenge";
export declare enum DomainProvisioningCertStatusEnum {
    CertStatusUnspecified = "CERT_STATUS_UNSPECIFIED",
    CertPending = "CERT_PENDING",
    CertMissing = "CERT_MISSING",
    CertProcessing = "CERT_PROCESSING",
    CertPropagating = "CERT_PROPAGATING",
    CertActive = "CERT_ACTIVE",
    CertError = "CERT_ERROR"
}
export declare enum DomainProvisioningDnsStatusEnum {
    DnsStatusUnspecified = "DNS_STATUS_UNSPECIFIED",
    DnsPending = "DNS_PENDING",
    DnsMissing = "DNS_MISSING",
    DnsPartialMatch = "DNS_PARTIAL_MATCH",
    DnsMatch = "DNS_MATCH",
    DnsExtraneousMatch = "DNS_EXTRANEOUS_MATCH"
}
/**
 * The current certificate provisioning status information for a domain.
**/
export declare class DomainProvisioning extends SpeakeasyBase {
    certChallengeDiscoveredTxt?: string[];
    certChallengeDns?: CertDnsChallenge;
    certChallengeHttp?: CertHttpChallenge;
    certStatus?: DomainProvisioningCertStatusEnum;
    discoveredIps?: string[];
    dnsFetchTime?: string;
    dnsStatus?: DomainProvisioningDnsStatusEnum;
    expectedIps?: string[];
}
