import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";
import { Money } from "./money";


// Item
/** 
 * A single list item. Each variation of an item in the price list should have its own Item with its own price data.
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];

  @Metadata({ data: "json, name=price" })
  price?: Money;
}
