import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
/**
 * Response message for ListSkus.
**/
export declare class GoogleCloudChannelV1ListSkusResponse extends SpeakeasyBase {
    nextPageToken?: string;
    skus?: GoogleCloudChannelV1Sku[];
}
