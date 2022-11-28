import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaLocalInventory } from "./googlecloudretailv2betalocalinventory";
/**
 * Request message for ProductService.AddLocalInventories method.
**/
export declare class GoogleCloudRetailV2betaAddLocalInventoriesRequest extends SpeakeasyBase {
    addMask?: string;
    addTime?: string;
    allowMissing?: boolean;
    localInventories?: GoogleCloudRetailV2betaLocalInventory[];
}
