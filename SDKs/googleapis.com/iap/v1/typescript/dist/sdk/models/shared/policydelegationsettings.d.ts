import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyName } from "./policyname";
import { Resource } from "./resource";
/**
 * PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
**/
export declare class PolicyDelegationSettings extends SpeakeasyBase {
    iamPermission?: string;
    iamServiceName?: string;
    policyName?: PolicyName;
    resource?: Resource;
}
