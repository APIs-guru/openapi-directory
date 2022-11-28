import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCatalogAttributeInput } from "./googlecloudretailv2betacatalogattribute";



// GoogleCloudRetailV2betaAddCatalogAttributeRequestInput
/** 
 * Request for CatalogService.AddCatalogAttribute method.
**/
export class GoogleCloudRetailV2betaAddCatalogAttributeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2betaCatalogAttributeInput;
}
