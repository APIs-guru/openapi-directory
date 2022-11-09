import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1Taxonomy } from "./googleclouddatacatalogv1beta1taxonomy";


// GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
/** 
 * Response message for ImportTaxonomies.
**/
export class GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxonomies", elemType: shared.GoogleCloudDatacatalogV1beta1Taxonomy })
  taxonomies?: GoogleCloudDatacatalogV1beta1Taxonomy[];
}
