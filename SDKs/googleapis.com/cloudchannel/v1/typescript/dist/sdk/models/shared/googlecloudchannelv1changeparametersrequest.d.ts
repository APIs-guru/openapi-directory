import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";
/**
 * Request message for CloudChannelService.ChangeParametersRequest.
**/
export declare class GoogleCloudChannelV1ChangeParametersRequestInput extends SpeakeasyBase {
    parameters?: GoogleCloudChannelV1ParameterInput[];
    purchaseOrderId?: string;
    requestId?: string;
}
