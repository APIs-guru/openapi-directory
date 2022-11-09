import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainRedirect } from "./domainredirect";
import { DomainProvisioning } from "./domainprovisioning";

export enum DomainStatusEnum {
    DomainStatusUnspecified = "DOMAIN_STATUS_UNSPECIFIED"
,    DomainChangePending = "DOMAIN_CHANGE_PENDING"
,    DomainActive = "DOMAIN_ACTIVE"
,    DomainVerificationRequired = "DOMAIN_VERIFICATION_REQUIRED"
,    DomainVerificationLost = "DOMAIN_VERIFICATION_LOST"
}


// Domain
/** 
 * The intended behavior and status information of a domain.
**/
export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=domainRedirect" })
  domainRedirect?: DomainRedirect;

  @Metadata({ data: "json, name=provisioning" })
  provisioning?: DomainProvisioning;

  @Metadata({ data: "json, name=site" })
  site?: string;

  @Metadata({ data: "json, name=status" })
  status?: DomainStatusEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
