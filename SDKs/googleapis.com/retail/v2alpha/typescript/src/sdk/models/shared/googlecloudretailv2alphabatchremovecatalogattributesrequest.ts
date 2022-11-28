import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest
/** 
 * Request for CatalogService.BatchRemoveCatalogAttributes method.
**/
export class GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeKeys" })
  attributeKeys?: string[];
}
