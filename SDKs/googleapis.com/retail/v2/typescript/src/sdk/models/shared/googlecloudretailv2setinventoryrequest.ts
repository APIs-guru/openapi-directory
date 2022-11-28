import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ProductInput } from "./googlecloudretailv2product";



// GoogleCloudRetailV2SetInventoryRequestInput
/** 
 * Request message for ProductService.SetInventory method.
**/
export class GoogleCloudRetailV2SetInventoryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: GoogleCloudRetailV2ProductInput;

  @SpeakeasyMetadata({ data: "json, name=setMask" })
  setMask?: string;

  @SpeakeasyMetadata({ data: "json, name=setTime" })
  setTime?: string;
}
