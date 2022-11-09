import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2LocalInventory } from "./googlecloudretailv2localinventory";


// GoogleCloudRetailV2AddLocalInventoriesRequest
/** 
 * Request message for ProductService.AddLocalInventories method.
**/
export class GoogleCloudRetailV2AddLocalInventoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addMask" })
  addMask?: string;

  @Metadata({ data: "json, name=addTime" })
  addTime?: string;

  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=localInventories", elemType: shared.GoogleCloudRetailV2LocalInventory })
  localInventories?: GoogleCloudRetailV2LocalInventory[];
}
