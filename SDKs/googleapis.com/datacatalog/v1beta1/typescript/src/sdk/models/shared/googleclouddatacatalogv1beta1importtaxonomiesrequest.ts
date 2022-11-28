import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1InlineSource } from "./googleclouddatacatalogv1beta1inlinesource";



// GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest
/** 
 * Request message for ImportTaxonomies.
**/
export class GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inlineSource" })
  inlineSource?: GoogleCloudDatacatalogV1beta1InlineSource;
}
