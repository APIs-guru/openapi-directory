import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";



// GoogleCloudChannelV1ChangeParametersRequestInput
/** 
 * Request message for CloudChannelService.ChangeParametersRequest.
**/
export class GoogleCloudChannelV1ChangeParametersRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudChannelV1ParameterInput })
  parameters?: GoogleCloudChannelV1ParameterInput[];

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
