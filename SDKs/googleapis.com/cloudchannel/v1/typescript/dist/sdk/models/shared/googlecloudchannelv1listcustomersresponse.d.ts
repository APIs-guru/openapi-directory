import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Customer } from "./googlecloudchannelv1customer";
/**
 * Response message for CloudChannelService.ListCustomers.
**/
export declare class GoogleCloudChannelV1ListCustomersResponse extends SpeakeasyBase {
    customers?: GoogleCloudChannelV1Customer[];
    nextPageToken?: string;
}
