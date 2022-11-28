import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Offer } from "./googlecloudchannelv1offer";



// GoogleCloudChannelV1TransferableOffer
/** 
 * TransferableOffer represents an Offer that can be used in Transfer. Read-only.
**/
export class GoogleCloudChannelV1TransferableOffer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offer" })
  offer?: GoogleCloudChannelV1Offer;
}
