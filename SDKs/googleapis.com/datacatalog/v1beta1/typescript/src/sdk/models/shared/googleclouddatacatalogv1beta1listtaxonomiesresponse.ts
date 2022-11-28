import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Taxonomy } from "./googleclouddatacatalogv1beta1taxonomy";



// GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
/** 
 * Response message for ListTaxonomies.
**/
export class GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomies", elemType: GoogleCloudDatacatalogV1beta1Taxonomy })
  taxonomies?: GoogleCloudDatacatalogV1beta1Taxonomy[];
}
