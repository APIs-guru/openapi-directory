import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Taxonomy } from "./googleclouddatacatalogv1beta1taxonomy";



// GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
/** 
 * Response message for ImportTaxonomies.
**/
export class GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxonomies", elemType: GoogleCloudDatacatalogV1beta1Taxonomy })
  taxonomies?: GoogleCloudDatacatalogV1beta1Taxonomy[];
}
