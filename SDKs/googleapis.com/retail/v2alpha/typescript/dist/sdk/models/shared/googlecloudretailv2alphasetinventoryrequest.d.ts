import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProductInput } from "./googlecloudretailv2alphaproduct";
/**
 * Request message for ProductService.SetInventory method.
**/
export declare class GoogleCloudRetailV2alphaSetInventoryRequestInput extends SpeakeasyBase {
    allowMissing?: boolean;
    inventory?: GoogleCloudRetailV2alphaProductInput;
    setMask?: string;
    setTime?: string;
}
