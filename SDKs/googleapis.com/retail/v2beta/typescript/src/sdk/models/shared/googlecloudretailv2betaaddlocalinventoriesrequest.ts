import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaLocalInventory } from "./googlecloudretailv2betalocalinventory";


// GoogleCloudRetailV2betaAddLocalInventoriesRequest
/** 
 * Request message for ProductService.AddLocalInventories method.
**/
export class GoogleCloudRetailV2betaAddLocalInventoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addMask" })
  addMask?: string;

  @Metadata({ data: "json, name=addTime" })
  addTime?: string;

  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=localInventories", elemType: shared.GoogleCloudRetailV2betaLocalInventory })
  localInventories?: GoogleCloudRetailV2betaLocalInventory[];
}
