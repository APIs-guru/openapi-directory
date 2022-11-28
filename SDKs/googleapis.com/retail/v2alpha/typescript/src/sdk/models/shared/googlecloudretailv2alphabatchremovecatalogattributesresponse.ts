import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse
/** 
 * Response of the CatalogService.BatchRemoveCatalogAttributes.
**/
export class GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedCatalogAttributes" })
  deletedCatalogAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=resetCatalogAttributes" })
  resetCatalogAttributes?: string[];
}
