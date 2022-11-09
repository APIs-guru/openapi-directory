import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest
/** 
 * Request for CatalogService.BatchRemoveCatalogAttributes method.
**/
export class GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeKeys" })
  attributeKeys?: string[];
}
