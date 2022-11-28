import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
import { Section } from "./section";



// PriceList
/** 
 * A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.
**/
export class PriceList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels", elemType: Label })
  labels?: Label[];

  @SpeakeasyMetadata({ data: "json, name=priceListId" })
  priceListId?: string;

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: Section })
  sections?: Section[];

  @SpeakeasyMetadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}
