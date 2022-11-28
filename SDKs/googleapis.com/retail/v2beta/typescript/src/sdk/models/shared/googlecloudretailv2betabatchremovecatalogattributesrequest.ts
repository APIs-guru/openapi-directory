import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest
/** 
 * Request for CatalogService.BatchRemoveCatalogAttributes method.
**/
export class GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeKeys" })
  attributeKeys?: string[];
}
