import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest
/** 
 * Request for CatalogService.RemoveCatalogAttribute method.
**/
export class GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
