import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";



// GoogleCloudChannelV1ChangeOfferRequestInput
/** 
 * Request message for CloudChannelService.ChangeOffer.
**/
export class GoogleCloudChannelV1ChangeOfferRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offer" })
  offer?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudChannelV1ParameterInput })
  parameters?: GoogleCloudChannelV1ParameterInput[];

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
