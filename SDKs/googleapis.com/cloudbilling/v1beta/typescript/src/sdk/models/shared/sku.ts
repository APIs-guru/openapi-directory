import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Price } from "./price";


// Sku
/** 
 * Information about SKUs appearing in the cost estimate.
**/
export class Sku extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=prices", elemType: shared.Price })
  prices?: Price[];

  @Metadata({ data: "json, name=sku" })
  sku?: string;
}
