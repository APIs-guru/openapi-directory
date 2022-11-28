import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveProductFromProductSetRequest
/** 
 * Request message for the `RemoveProductFromProductSet` method.
**/
export class RemoveProductFromProductSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: string;
}
