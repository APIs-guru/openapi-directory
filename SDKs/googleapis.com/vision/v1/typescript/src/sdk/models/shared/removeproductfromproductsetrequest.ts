import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveProductFromProductSetRequest
/** 
 * Request message for the `RemoveProductFromProductSet` method.
**/
export class RemoveProductFromProductSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: string;
}
