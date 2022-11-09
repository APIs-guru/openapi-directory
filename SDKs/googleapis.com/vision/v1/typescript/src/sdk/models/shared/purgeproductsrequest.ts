import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductSetPurgeConfig } from "./productsetpurgeconfig";


// PurgeProductsRequest
/** 
 * Request message for the `PurgeProducts` method.
**/
export class PurgeProductsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleteOrphanProducts" })
  deleteOrphanProducts?: boolean;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=productSetPurgeConfig" })
  productSetPurgeConfig?: ProductSetPurgeConfig;
}
