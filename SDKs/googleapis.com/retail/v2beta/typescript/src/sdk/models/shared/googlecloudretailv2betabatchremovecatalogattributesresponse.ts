import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse
/** 
 * Response of the CatalogService.BatchRemoveCatalogAttributes.
**/
export class GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedCatalogAttributes" })
  deletedCatalogAttributes?: string[];

  @Metadata({ data: "json, name=resetCatalogAttributes" })
  resetCatalogAttributes?: string[];
}
