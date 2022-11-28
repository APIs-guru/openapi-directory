import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OnPremDomainDetails
/** 
 * OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
**/
export class OnPremDomainDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableSidFiltering" })
  disableSidFiltering?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;
}
