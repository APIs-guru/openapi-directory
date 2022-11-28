import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2LocalInventory } from "./googlecloudretailv2localinventory";
/**
 * Request message for ProductService.AddLocalInventories method.
**/
export declare class GoogleCloudRetailV2AddLocalInventoriesRequest extends SpeakeasyBase {
    addMask?: string;
    addTime?: string;
    allowMissing?: boolean;
    localInventories?: GoogleCloudRetailV2LocalInventory[];
}
