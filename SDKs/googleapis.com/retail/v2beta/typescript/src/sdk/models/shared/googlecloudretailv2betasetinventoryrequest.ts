import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProductInput } from "./googlecloudretailv2betaproduct";



// GoogleCloudRetailV2betaSetInventoryRequestInput
/** 
 * Request message for ProductService.SetInventory method.
**/
export class GoogleCloudRetailV2betaSetInventoryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: GoogleCloudRetailV2betaProductInput;

  @SpeakeasyMetadata({ data: "json, name=setMask" })
  setMask?: string;

  @SpeakeasyMetadata({ data: "json, name=setTime" })
  setTime?: string;
}
