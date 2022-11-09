import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomAttribute } from "./customattribute";
import { Price } from "./price";
import { Price } from "./price";


// RegionalInventory
/** 
 * Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
**/
export class RegionalInventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability" })
  availability?: string;

  @Metadata({ data: "json, name=customAttributes", elemType: shared.CustomAttribute })
  customAttributes?: CustomAttribute[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=regionId" })
  regionId?: string;

  @Metadata({ data: "json, name=salePrice" })
  salePrice?: Price;

  @Metadata({ data: "json, name=salePriceEffectiveDate" })
  salePriceEffectiveDate?: string;
}
