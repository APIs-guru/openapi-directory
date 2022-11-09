import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";


// GoogleCloudRetailV2betaSetInventoryRequest
/** 
 * Request message for ProductService.SetInventory method.
**/
export class GoogleCloudRetailV2betaSetInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=inventory" })
  inventory?: GoogleCloudRetailV2betaProduct;

  @Metadata({ data: "json, name=setMask" })
  setMask?: string;

  @Metadata({ data: "json, name=setTime" })
  setTime?: string;
}
