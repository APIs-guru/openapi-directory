import { SpeakeasyBase } from "../../../internal/utils";
import { DomainRedirect } from "./domainredirect";
import { DomainProvisioning } from "./domainprovisioning";
export declare enum DomainStatusEnum {
    DomainStatusUnspecified = "DOMAIN_STATUS_UNSPECIFIED",
    DomainChangePending = "DOMAIN_CHANGE_PENDING",
    DomainActive = "DOMAIN_ACTIVE",
    DomainVerificationRequired = "DOMAIN_VERIFICATION_REQUIRED",
    DomainVerificationLost = "DOMAIN_VERIFICATION_LOST"
}
/**
 * The intended behavior and status information of a domain.
**/
export declare class Domain extends SpeakeasyBase {
    domainName?: string;
    domainRedirect?: DomainRedirect;
    provisioning?: DomainProvisioning;
    site?: string;
    status?: DomainStatusEnum;
    updateTime?: string;
}
