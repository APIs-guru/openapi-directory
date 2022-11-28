import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
import { Price } from "./price";



// RegionalInventory
/** 
 * Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
**/
export class RegionalInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: string;

  @SpeakeasyMetadata({ data: "json, name=customAttributes", elemType: CustomAttribute })
  customAttributes?: CustomAttribute[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Price;

  @SpeakeasyMetadata({ data: "json, name=regionId" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "json, name=salePrice" })
  salePrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=salePriceEffectiveDate" })
  salePriceEffectiveDate?: string;
}
