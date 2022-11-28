import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for CloudChannelService.ListTransferableSkus
**/
export declare class GoogleCloudChannelV1ListTransferableSkusRequest extends SpeakeasyBase {
    authToken?: string;
    cloudIdentityId?: string;
    customerName?: string;
    languageCode?: string;
    pageSize?: number;
    pageToken?: string;
}
