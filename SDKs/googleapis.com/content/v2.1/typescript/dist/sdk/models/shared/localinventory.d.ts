import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
import { Price } from "./price";
/**
 * Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
**/
export declare class LocalInventory extends SpeakeasyBase {
    availability?: string;
    customAttributes?: CustomAttribute[];
    instoreProductLocation?: string;
    kind?: string;
    pickupMethod?: string;
    pickupSla?: string;
    price?: Price;
    quantity?: number;
    salePrice?: Price;
    salePriceEffectiveDate?: string;
    storeCode?: string;
}
