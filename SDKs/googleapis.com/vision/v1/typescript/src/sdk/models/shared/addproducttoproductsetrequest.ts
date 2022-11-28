import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddProductToProductSetRequest
/** 
 * Request message for the `AddProductToProductSet` method.
**/
export class AddProductToProductSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: string;
}
