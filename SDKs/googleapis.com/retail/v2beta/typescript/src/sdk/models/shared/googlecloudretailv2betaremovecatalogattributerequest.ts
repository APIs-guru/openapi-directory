import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRemoveCatalogAttributeRequest
/** 
 * Request for CatalogService.RemoveCatalogAttribute method.
**/
export class GoogleCloudRetailV2betaRemoveCatalogAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
