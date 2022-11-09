import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Parameter } from "./googlecloudchannelv1parameter";


// GoogleCloudChannelV1ChangeOfferRequest
/** 
 * Request message for CloudChannelService.ChangeOffer.
**/
export class GoogleCloudChannelV1ChangeOfferRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=offer" })
  offer?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudChannelV1Parameter })
  parameters?: GoogleCloudChannelV1Parameter[];

  @Metadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
