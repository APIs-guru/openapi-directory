import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaLocalInventory } from "./googlecloudretailv2betalocalinventory";



// GoogleCloudRetailV2betaAddLocalInventoriesRequest
/** 
 * Request message for ProductService.AddLocalInventories method.
**/
export class GoogleCloudRetailV2betaAddLocalInventoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addMask" })
  addMask?: string;

  @SpeakeasyMetadata({ data: "json, name=addTime" })
  addTime?: string;

  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2betaLocalInventory })
  localInventories?: GoogleCloudRetailV2betaLocalInventory[];
}
