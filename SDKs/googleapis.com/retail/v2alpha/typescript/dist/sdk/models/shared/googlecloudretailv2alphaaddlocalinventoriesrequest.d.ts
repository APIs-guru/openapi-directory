import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaLocalInventory } from "./googlecloudretailv2alphalocalinventory";
/**
 * Request message for ProductService.AddLocalInventories method.
**/
export declare class GoogleCloudRetailV2alphaAddLocalInventoriesRequest extends SpeakeasyBase {
    addMask?: string;
    addTime?: string;
    allowMissing?: boolean;
    localInventories?: GoogleCloudRetailV2alphaLocalInventory[];
}
