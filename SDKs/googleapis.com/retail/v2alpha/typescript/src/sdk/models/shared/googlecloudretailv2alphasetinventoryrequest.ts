import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";


// GoogleCloudRetailV2alphaSetInventoryRequest
/** 
 * Request message for ProductService.SetInventory method.
**/
export class GoogleCloudRetailV2alphaSetInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=inventory" })
  inventory?: GoogleCloudRetailV2alphaProduct;

  @Metadata({ data: "json, name=setMask" })
  setMask?: string;

  @Metadata({ data: "json, name=setTime" })
  setTime?: string;
}
