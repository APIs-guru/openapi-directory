import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
import { Section } from "./section";
/**
 * A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.
**/
export declare class PriceList extends SpeakeasyBase {
    labels?: Label[];
    priceListId?: string;
    sections?: Section[];
    sourceUrl?: string;
}
