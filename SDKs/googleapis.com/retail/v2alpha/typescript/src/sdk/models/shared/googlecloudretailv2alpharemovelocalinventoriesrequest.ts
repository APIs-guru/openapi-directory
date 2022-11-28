import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest
/** 
 * Request message for ProductService.RemoveLocalInventories method.
**/
export class GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeTime" })
  removeTime?: string;
}
