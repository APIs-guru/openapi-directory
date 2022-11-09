import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaCatalogAttribute } from "./googlecloudretailv2betacatalogattribute";


// GoogleCloudRetailV2betaReplaceCatalogAttributeRequest
/** 
 * Request for CatalogService.ReplaceCatalogAttribute method.
**/
export class GoogleCloudRetailV2betaReplaceCatalogAttributeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogAttribute" })
  catalogAttribute?: GoogleCloudRetailV2betaCatalogAttribute;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
