import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Taxonomy } from "./googleclouddatacatalogv1taxonomy";



// GoogleCloudDatacatalogV1ImportTaxonomiesResponse
/** 
 * Response message for ImportTaxonomies.
**/
export class GoogleCloudDatacatalogV1ImportTaxonomiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxonomies", elemType: GoogleCloudDatacatalogV1Taxonomy })
  taxonomies?: GoogleCloudDatacatalogV1Taxonomy[];
}
