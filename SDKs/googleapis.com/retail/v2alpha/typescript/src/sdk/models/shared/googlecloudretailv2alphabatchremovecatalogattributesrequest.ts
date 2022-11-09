import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest
/** 
 * Request for CatalogService.BatchRemoveCatalogAttributes method.
**/
export class GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeKeys" })
  attributeKeys?: string[];
}
