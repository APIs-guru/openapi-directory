import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Geolocation } from "./geolocation";
import { ServiceAccountDelegationInfo } from "./serviceaccountdelegationinfo";


// Access
/** 
 * Represents an access event.
**/
export class Access extends SpeakeasyBase {
  @Metadata({ data: "json, name=callerIp" })
  callerIp?: string;

  @Metadata({ data: "json, name=callerIpGeo" })
  callerIpGeo?: Geolocation;

  @Metadata({ data: "json, name=methodName" })
  methodName?: string;

  @Metadata({ data: "json, name=principalEmail" })
  principalEmail?: string;

  @Metadata({ data: "json, name=principalSubject" })
  principalSubject?: string;

  @Metadata({ data: "json, name=serviceAccountDelegationInfo", elemType: shared.ServiceAccountDelegationInfo })
  serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[];

  @Metadata({ data: "json, name=serviceAccountKeyName" })
  serviceAccountKeyName?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=userAgentFamily" })
  userAgentFamily?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
