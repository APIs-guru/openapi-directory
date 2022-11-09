import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2RemoveLocalInventoriesRequest
/** 
 * Request message for ProductService.RemoveLocalInventories method.
**/
export class GoogleCloudRetailV2RemoveLocalInventoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=placeIds" })
  placeIds?: string[];

  @Metadata({ data: "json, name=removeTime" })
  removeTime?: string;
}
