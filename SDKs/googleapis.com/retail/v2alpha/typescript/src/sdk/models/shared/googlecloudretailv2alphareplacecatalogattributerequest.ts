import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalogAttributeInput } from "./googlecloudretailv2alphacatalogattribute";



// GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput
/** 
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export class GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2alphaCatalogAttributeInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
