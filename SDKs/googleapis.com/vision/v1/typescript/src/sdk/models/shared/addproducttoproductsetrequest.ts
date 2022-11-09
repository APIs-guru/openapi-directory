import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddProductToProductSetRequest
/** 
 * Request message for the `AddProductToProductSet` method.
**/
export class AddProductToProductSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: string;
}
