import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";
/**
 * Request message for CloudChannelService.ChangeOffer.
**/
export declare class GoogleCloudChannelV1ChangeOfferRequestInput extends SpeakeasyBase {
    offer?: string;
    parameters?: GoogleCloudChannelV1ParameterInput[];
    purchaseOrderId?: string;
    requestId?: string;
}
