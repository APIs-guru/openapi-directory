import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRemoveLocalInventoriesRequest
/** 
 * Request message for ProductService.RemoveLocalInventories method.
**/
export class GoogleCloudRetailV2betaRemoveLocalInventoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeTime" })
  removeTime?: string;
}
