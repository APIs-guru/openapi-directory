import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaCatalogAttribute } from "./googlecloudretailv2alphacatalogattribute";


// GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest
/** 
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export class GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2alphaCatalogAttribute;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
