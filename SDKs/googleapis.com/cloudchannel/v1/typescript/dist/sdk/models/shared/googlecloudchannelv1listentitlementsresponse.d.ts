import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Entitlement } from "./googlecloudchannelv1entitlement";
/**
 * Response message for CloudChannelService.ListEntitlements.
**/
export declare class GoogleCloudChannelV1ListEntitlementsResponse extends SpeakeasyBase {
    entitlements?: GoogleCloudChannelV1Entitlement[];
    nextPageToken?: string;
}
