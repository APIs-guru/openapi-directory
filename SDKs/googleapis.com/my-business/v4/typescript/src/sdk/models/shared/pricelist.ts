import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";
import { Section } from "./section";


// PriceList
/** 
 * A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.
**/
export class PriceList extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];

  @Metadata({ data: "json, name=priceListId" })
  priceListId?: string;

  @Metadata({ data: "json, name=sections", elemType: shared.Section })
  sections?: Section[];

  @Metadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}
