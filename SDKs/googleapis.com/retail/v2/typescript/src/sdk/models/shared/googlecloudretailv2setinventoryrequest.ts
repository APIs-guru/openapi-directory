import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";


// GoogleCloudRetailV2SetInventoryRequest
/** 
 * Request message for ProductService.SetInventory method.
**/
export class GoogleCloudRetailV2SetInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=inventory" })
  inventory?: GoogleCloudRetailV2Product;

  @Metadata({ data: "json, name=setMask" })
  setMask?: string;

  @Metadata({ data: "json, name=setTime" })
  setTime?: string;
}
