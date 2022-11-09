import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2CatalogAttribute } from "./googlecloudretailv2catalogattribute";


// GoogleCloudRetailV2ReplaceCatalogAttributeRequest
/** 
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export class GoogleCloudRetailV2ReplaceCatalogAttributeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2CatalogAttribute;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
