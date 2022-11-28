import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductSetPurgeConfig } from "./productsetpurgeconfig";



// PurgeProductsRequest
/** 
 * Request message for the `PurgeProducts` method.
**/
export class PurgeProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleteOrphanProducts" })
  deleteOrphanProducts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=productSetPurgeConfig" })
  productSetPurgeConfig?: ProductSetPurgeConfig;
}
