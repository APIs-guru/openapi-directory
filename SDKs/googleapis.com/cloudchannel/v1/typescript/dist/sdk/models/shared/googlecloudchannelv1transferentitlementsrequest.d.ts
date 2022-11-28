import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EntitlementInput } from "./googlecloudchannelv1entitlement";
/**
 * Request message for CloudChannelService.TransferEntitlements.
**/
export declare class GoogleCloudChannelV1TransferEntitlementsRequestInput extends SpeakeasyBase {
    authToken?: string;
    entitlements?: GoogleCloudChannelV1EntitlementInput[];
    requestId?: string;
}
