import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
import { GoogleCloudChannelV1TransferEligibility } from "./googlecloudchannelv1transfereligibility";


// GoogleCloudChannelV1TransferableSku
/** 
 * TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
**/
export class GoogleCloudChannelV1TransferableSku extends SpeakeasyBase {
  @Metadata({ data: "json, name=legacySku" })
  legacySku?: GoogleCloudChannelV1Sku;

  @Metadata({ data: "json, name=sku" })
  sku?: GoogleCloudChannelV1Sku;

  @Metadata({ data: "json, name=transferEligibility" })
  transferEligibility?: GoogleCloudChannelV1TransferEligibility;
}
