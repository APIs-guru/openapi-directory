import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CatalogAttributeInput } from "./googlecloudretailv2catalogattribute";



// GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput
/** 
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export class GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2CatalogAttributeInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
