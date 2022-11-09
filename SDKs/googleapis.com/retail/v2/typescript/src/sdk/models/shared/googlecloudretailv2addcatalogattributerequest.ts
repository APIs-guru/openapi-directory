import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2CatalogAttribute } from "./googlecloudretailv2catalogattribute";


// GoogleCloudRetailV2AddCatalogAttributeRequest
/** 
 * Request for CatalogService.AddCatalogAttribute method.
**/
export class GoogleCloudRetailV2AddCatalogAttributeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2CatalogAttribute;
}
