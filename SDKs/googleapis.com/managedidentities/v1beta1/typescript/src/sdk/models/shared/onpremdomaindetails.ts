import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OnPremDomainDetails
/** 
 * OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
**/
export class OnPremDomainDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableSidFiltering" })
  disableSidFiltering?: boolean;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;
}
