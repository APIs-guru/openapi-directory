import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaLocalInventory } from "./googlecloudretailv2alphalocalinventory";



// GoogleCloudRetailV2alphaAddLocalInventoriesRequest
/** 
 * Request message for ProductService.AddLocalInventories method.
**/
export class GoogleCloudRetailV2alphaAddLocalInventoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addMask" })
  addMask?: string;

  @SpeakeasyMetadata({ data: "json, name=addTime" })
  addTime?: string;

  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2alphaLocalInventory })
  localInventories?: GoogleCloudRetailV2alphaLocalInventory[];
}
