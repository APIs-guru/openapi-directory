import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaLocalInventory } from "./googlecloudretailv2alphalocalinventory";


// GoogleCloudRetailV2alphaAddLocalInventoriesRequest
/** 
 * Request message for ProductService.AddLocalInventories method.
**/
export class GoogleCloudRetailV2alphaAddLocalInventoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addMask" })
  addMask?: string;

  @Metadata({ data: "json, name=addTime" })
  addTime?: string;

  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=localInventories", elemType: shared.GoogleCloudRetailV2alphaLocalInventory })
  localInventories?: GoogleCloudRetailV2alphaLocalInventory[];
}
