import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
import { GoogleCloudChannelV1TransferEligibility } from "./googlecloudchannelv1transfereligibility";
/**
 * TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
**/
export declare class GoogleCloudChannelV1TransferableSku extends SpeakeasyBase {
    legacySku?: GoogleCloudChannelV1Sku;
    sku?: GoogleCloudChannelV1Sku;
    transferEligibility?: GoogleCloudChannelV1TransferEligibility;
}
