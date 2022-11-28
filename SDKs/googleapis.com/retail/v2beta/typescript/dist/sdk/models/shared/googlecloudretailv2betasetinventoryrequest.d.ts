import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProductInput } from "./googlecloudretailv2betaproduct";
/**
 * Request message for ProductService.SetInventory method.
**/
export declare class GoogleCloudRetailV2betaSetInventoryRequestInput extends SpeakeasyBase {
    allowMissing?: boolean;
    inventory?: GoogleCloudRetailV2betaProductInput;
    setMask?: string;
    setTime?: string;
}
