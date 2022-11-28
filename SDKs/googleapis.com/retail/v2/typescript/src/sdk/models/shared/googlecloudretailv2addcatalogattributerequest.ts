import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CatalogAttributeInput } from "./googlecloudretailv2catalogattribute";



// GoogleCloudRetailV2AddCatalogAttributeRequestInput
/** 
 * Request for CatalogService.AddCatalogAttribute method.
**/
export class GoogleCloudRetailV2AddCatalogAttributeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2CatalogAttributeInput;
}
