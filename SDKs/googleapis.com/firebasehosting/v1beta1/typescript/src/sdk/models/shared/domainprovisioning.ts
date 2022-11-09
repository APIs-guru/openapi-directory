import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertDnsChallenge } from "./certdnschallenge";
import { CertHttpChallenge } from "./certhttpchallenge";

export enum DomainProvisioningCertStatusEnum {
    CertStatusUnspecified = "CERT_STATUS_UNSPECIFIED"
,    CertPending = "CERT_PENDING"
,    CertMissing = "CERT_MISSING"
,    CertProcessing = "CERT_PROCESSING"
,    CertPropagating = "CERT_PROPAGATING"
,    CertActive = "CERT_ACTIVE"
,    CertError = "CERT_ERROR"
}

export enum DomainProvisioningDnsStatusEnum {
    DnsStatusUnspecified = "DNS_STATUS_UNSPECIFIED"
,    DnsPending = "DNS_PENDING"
,    DnsMissing = "DNS_MISSING"
,    DnsPartialMatch = "DNS_PARTIAL_MATCH"
,    DnsMatch = "DNS_MATCH"
,    DnsExtraneousMatch = "DNS_EXTRANEOUS_MATCH"
}


// DomainProvisioning
/** 
 * The current certificate provisioning status information for a domain.
**/
export class DomainProvisioning extends SpeakeasyBase {
  @Metadata({ data: "json, name=certChallengeDiscoveredTxt" })
  certChallengeDiscoveredTxt?: string[];

  @Metadata({ data: "json, name=certChallengeDns" })
  certChallengeDns?: CertDnsChallenge;

  @Metadata({ data: "json, name=certChallengeHttp" })
  certChallengeHttp?: CertHttpChallenge;

  @Metadata({ data: "json, name=certStatus" })
  certStatus?: DomainProvisioningCertStatusEnum;

  @Metadata({ data: "json, name=discoveredIps" })
  discoveredIps?: string[];

  @Metadata({ data: "json, name=dnsFetchTime" })
  dnsFetchTime?: string;

  @Metadata({ data: "json, name=dnsStatus" })
  dnsStatus?: DomainProvisioningDnsStatusEnum;

  @Metadata({ data: "json, name=expectedIps" })
  expectedIps?: string[];
}
