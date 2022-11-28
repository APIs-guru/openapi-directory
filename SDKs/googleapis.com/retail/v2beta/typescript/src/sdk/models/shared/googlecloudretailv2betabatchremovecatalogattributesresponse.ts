import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse
/** 
 * Response of the CatalogService.BatchRemoveCatalogAttributes.
**/
export class GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedCatalogAttributes" })
  deletedCatalogAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=resetCatalogAttributes" })
  resetCatalogAttributes?: string[];
}
