import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaCatalogAttribute } from "./googlecloudretailv2betacatalogattribute";


// GoogleCloudRetailV2betaAddCatalogAttributeRequest
/** 
 * Request for CatalogService.AddCatalogAttribute method.
**/
export class GoogleCloudRetailV2betaAddCatalogAttributeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2betaCatalogAttribute;
}
