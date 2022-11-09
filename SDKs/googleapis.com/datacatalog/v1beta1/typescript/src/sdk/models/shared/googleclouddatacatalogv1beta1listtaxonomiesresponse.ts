import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1Taxonomy } from "./googleclouddatacatalogv1beta1taxonomy";


// GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
/** 
 * Response message for ListTaxonomies.
**/
export class GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=taxonomies", elemType: shared.GoogleCloudDatacatalogV1beta1Taxonomy })
  taxonomies?: GoogleCloudDatacatalogV1beta1Taxonomy[];
}
