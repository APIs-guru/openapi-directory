import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
import { Price } from "./price";
/**
 * Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
**/
export declare class RegionalInventory extends SpeakeasyBase {
    availability?: string;
    customAttributes?: CustomAttribute[];
    kind?: string;
    price?: Price;
    regionId?: string;
    salePrice?: Price;
    salePriceEffectiveDate?: string;
}
