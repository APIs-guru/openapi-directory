import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainRedirect } from "./domainredirect";
import { DomainProvisioning } from "./domainprovisioning";


export enum DomainStatusEnum {
    DomainStatusUnspecified = "DOMAIN_STATUS_UNSPECIFIED",
    DomainChangePending = "DOMAIN_CHANGE_PENDING",
    DomainActive = "DOMAIN_ACTIVE",
    DomainVerificationRequired = "DOMAIN_VERIFICATION_REQUIRED",
    DomainVerificationLost = "DOMAIN_VERIFICATION_LOST"
}


// Domain
/** 
 * The intended behavior and status information of a domain.
**/
export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=domainRedirect" })
  domainRedirect?: DomainRedirect;

  @SpeakeasyMetadata({ data: "json, name=provisioning" })
  provisioning?: DomainProvisioning;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DomainStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
