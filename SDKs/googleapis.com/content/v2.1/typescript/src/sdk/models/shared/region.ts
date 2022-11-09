import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionGeoTargetArea } from "./regiongeotargetarea";
import { RegionPostalCodeArea } from "./regionpostalcodearea";


// Region
/** 
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
**/
export class Region extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=geotargetArea" })
  geotargetArea?: RegionGeoTargetArea;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=postalCodeArea" })
  postalCodeArea?: RegionPostalCodeArea;

  @Metadata({ data: "json, name=regionId" })
  regionId?: string;

  @Metadata({ data: "json, name=regionalInventoryEligible" })
  regionalInventoryEligible?: boolean;

  @Metadata({ data: "json, name=shippingEligible" })
  shippingEligible?: boolean;
}
