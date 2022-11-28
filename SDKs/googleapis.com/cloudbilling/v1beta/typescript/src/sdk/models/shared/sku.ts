import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



// Sku
/** 
 * Information about SKUs appearing in the cost estimate.
**/
export class Sku extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: Price })
  prices?: Price[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}
