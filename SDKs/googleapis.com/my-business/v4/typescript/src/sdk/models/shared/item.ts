import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
import { Money } from "./money";



// Item
/** 
 * A single list item. Each variation of an item in the price list should have its own Item with its own price data.
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: Label })
  labels?: Label[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;
}
