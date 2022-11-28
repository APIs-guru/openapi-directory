import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EntitlementInput } from "./googlecloudchannelv1entitlement";
/**
 * Request message for CloudChannelService.TransferEntitlementsToGoogle.
**/
export declare class GoogleCloudChannelV1TransferEntitlementsToGoogleRequestInput extends SpeakeasyBase {
    entitlements?: GoogleCloudChannelV1EntitlementInput[];
    requestId?: string;
}
