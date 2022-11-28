import { SpeakeasyBase } from "../../../internal/utils";
import { Geolocation } from "./geolocation";
import { ServiceAccountDelegationInfo } from "./serviceaccountdelegationinfo";
/**
 * Represents an access event.
**/
export declare class Access extends SpeakeasyBase {
    callerIp?: string;
    callerIpGeo?: Geolocation;
    methodName?: string;
    principalEmail?: string;
    principalSubject?: string;
    serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[];
    serviceAccountKeyName?: string;
    serviceName?: string;
    userAgentFamily?: string;
    userName?: string;
}
