import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2RemoveCatalogAttributeRequest
/** 
 * Request for CatalogService.RemoveCatalogAttribute method.
**/
export class GoogleCloudRetailV2RemoveCatalogAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
