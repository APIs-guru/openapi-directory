import { SpeakeasyBase } from "../../../internal/utils";
import { RegionGeoTargetArea } from "./regiongeotargetarea";
import { RegionPostalCodeArea } from "./regionpostalcodearea";
/**
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
**/
export declare class RegionInput extends SpeakeasyBase {
    displayName?: string;
    geotargetArea?: RegionGeoTargetArea;
    postalCodeArea?: RegionPostalCodeArea;
}
/**
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
**/
export declare class Region extends SpeakeasyBase {
    displayName?: string;
    geotargetArea?: RegionGeoTargetArea;
    merchantId?: string;
    postalCodeArea?: RegionPostalCodeArea;
    regionId?: string;
    regionalInventoryEligible?: boolean;
    shippingEligible?: boolean;
}
