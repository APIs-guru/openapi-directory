import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Taxonomy } from "./googleclouddatacatalogv1taxonomy";



// GoogleCloudDatacatalogV1ListTaxonomiesResponse
/** 
 * Response message for ListTaxonomies.
**/
export class GoogleCloudDatacatalogV1ListTaxonomiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomies", elemType: GoogleCloudDatacatalogV1Taxonomy })
  taxonomies?: GoogleCloudDatacatalogV1Taxonomy[];
}
