import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCatalogAttributeInput } from "./googlecloudretailv2betacatalogattribute";



// GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput
/** 
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export class GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2betaCatalogAttributeInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
