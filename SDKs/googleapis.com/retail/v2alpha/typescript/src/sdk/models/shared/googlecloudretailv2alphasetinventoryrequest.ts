import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProductInput } from "./googlecloudretailv2alphaproduct";



// GoogleCloudRetailV2alphaSetInventoryRequestInput
/** 
 * Request message for ProductService.SetInventory method.
**/
export class GoogleCloudRetailV2alphaSetInventoryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: GoogleCloudRetailV2alphaProductInput;

  @SpeakeasyMetadata({ data: "json, name=setMask" })
  setMask?: string;

  @SpeakeasyMetadata({ data: "json, name=setTime" })
  setTime?: string;
}
