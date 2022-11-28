import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ProductInput } from "./googlecloudretailv2product";
/**
 * Request message for ProductService.SetInventory method.
**/
export declare class GoogleCloudRetailV2SetInventoryRequestInput extends SpeakeasyBase {
    allowMissing?: boolean;
    inventory?: GoogleCloudRetailV2ProductInput;
    setMask?: string;
    setTime?: string;
}
