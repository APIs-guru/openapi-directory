import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertDnsChallenge } from "./certdnschallenge";
import { CertHttpChallenge } from "./certhttpchallenge";


export enum DomainProvisioningCertStatusEnum {
    CertStatusUnspecified = "CERT_STATUS_UNSPECIFIED",
    CertPending = "CERT_PENDING",
    CertMissing = "CERT_MISSING",
    CertProcessing = "CERT_PROCESSING",
    CertPropagating = "CERT_PROPAGATING",
    CertActive = "CERT_ACTIVE",
    CertError = "CERT_ERROR"
}

export enum DomainProvisioningDnsStatusEnum {
    DnsStatusUnspecified = "DNS_STATUS_UNSPECIFIED",
    DnsPending = "DNS_PENDING",
    DnsMissing = "DNS_MISSING",
    DnsPartialMatch = "DNS_PARTIAL_MATCH",
    DnsMatch = "DNS_MATCH",
    DnsExtraneousMatch = "DNS_EXTRANEOUS_MATCH"
}


// DomainProvisioning
/** 
 * The current certificate provisioning status information for a domain.
**/
export class DomainProvisioning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certChallengeDiscoveredTxt" })
  certChallengeDiscoveredTxt?: string[];

  @SpeakeasyMetadata({ data: "json, name=certChallengeDns" })
  certChallengeDns?: CertDnsChallenge;

  @SpeakeasyMetadata({ data: "json, name=certChallengeHttp" })
  certChallengeHttp?: CertHttpChallenge;

  @SpeakeasyMetadata({ data: "json, name=certStatus" })
  certStatus?: DomainProvisioningCertStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=discoveredIps" })
  discoveredIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=dnsFetchTime" })
  dnsFetchTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dnsStatus" })
  dnsStatus?: DomainProvisioningDnsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=expectedIps" })
  expectedIps?: string[];
}
