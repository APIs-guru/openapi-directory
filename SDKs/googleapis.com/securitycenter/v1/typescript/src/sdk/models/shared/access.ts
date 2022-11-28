import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Geolocation } from "./geolocation";
import { ServiceAccountDelegationInfo } from "./serviceaccountdelegationinfo";



// Access
/** 
 * Represents an access event.
**/
export class Access extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callerIp" })
  callerIp?: string;

  @SpeakeasyMetadata({ data: "json, name=callerIpGeo" })
  callerIpGeo?: Geolocation;

  @SpeakeasyMetadata({ data: "json, name=methodName" })
  methodName?: string;

  @SpeakeasyMetadata({ data: "json, name=principalEmail" })
  principalEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=principalSubject" })
  principalSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountDelegationInfo", elemType: ServiceAccountDelegationInfo })
  serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccountKeyName" })
  serviceAccountKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgentFamily" })
  userAgentFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
