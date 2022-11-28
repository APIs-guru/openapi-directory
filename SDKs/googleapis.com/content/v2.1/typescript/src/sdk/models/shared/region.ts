import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionGeoTargetArea } from "./regiongeotargetarea";
import { RegionPostalCodeArea } from "./regionpostalcodearea";



// RegionInput
/** 
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
**/
export class RegionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=geotargetArea" })
  geotargetArea?: RegionGeoTargetArea;

  @SpeakeasyMetadata({ data: "json, name=postalCodeArea" })
  postalCodeArea?: RegionPostalCodeArea;
}


// Region
/** 
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
**/
export class Region extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=geotargetArea" })
  geotargetArea?: RegionGeoTargetArea;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCodeArea" })
  postalCodeArea?: RegionPostalCodeArea;

  @SpeakeasyMetadata({ data: "json, name=regionId" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "json, name=regionalInventoryEligible" })
  regionalInventoryEligible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shippingEligible" })
  shippingEligible?: boolean;
}
