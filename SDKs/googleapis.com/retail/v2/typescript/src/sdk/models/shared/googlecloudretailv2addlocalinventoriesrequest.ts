import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2LocalInventory } from "./googlecloudretailv2localinventory";



// GoogleCloudRetailV2AddLocalInventoriesRequest
/** 
 * Request message for ProductService.AddLocalInventories method.
**/
export class GoogleCloudRetailV2AddLocalInventoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addMask" })
  addMask?: string;

  @SpeakeasyMetadata({ data: "json, name=addTime" })
  addTime?: string;

  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2LocalInventory })
  localInventories?: GoogleCloudRetailV2LocalInventory[];
}
