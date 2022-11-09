import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1Taxonomy } from "./googleclouddatacatalogv1taxonomy";


// GoogleCloudDatacatalogV1ImportTaxonomiesResponse
/** 
 * Response message for ImportTaxonomies.
**/
export class GoogleCloudDatacatalogV1ImportTaxonomiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxonomies", elemType: shared.GoogleCloudDatacatalogV1Taxonomy })
  taxonomies?: GoogleCloudDatacatalogV1Taxonomy[];
}
