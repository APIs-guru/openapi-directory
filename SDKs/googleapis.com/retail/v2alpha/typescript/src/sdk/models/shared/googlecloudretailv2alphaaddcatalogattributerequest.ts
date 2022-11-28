import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalogAttributeInput } from "./googlecloudretailv2alphacatalogattribute";



// GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput
/** 
 * Request for CatalogService.AddCatalogAttribute method.
**/
export class GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2alphaCatalogAttributeInput;
}
