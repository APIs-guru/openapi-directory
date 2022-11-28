import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2RemoveLocalInventoriesRequest
/** 
 * Request message for ProductService.RemoveLocalInventories method.
**/
export class GoogleCloudRetailV2RemoveLocalInventoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeTime" })
  removeTime?: string;
}
