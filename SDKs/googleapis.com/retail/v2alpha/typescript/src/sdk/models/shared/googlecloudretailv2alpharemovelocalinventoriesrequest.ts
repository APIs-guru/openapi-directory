import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest
/** 
 * Request message for ProductService.RemoveLocalInventories method.
**/
export class GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @Metadata({ data: "json, name=removeTime" })
  removeTime?: string;
}
