import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1Taxonomy } from "./googleclouddatacatalogv1taxonomy";


// GoogleCloudDatacatalogV1ListTaxonomiesResponse
/** 
 * Response message for ListTaxonomies.
**/
export class GoogleCloudDatacatalogV1ListTaxonomiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=taxonomies", elemType: shared.GoogleCloudDatacatalogV1Taxonomy })
  taxonomies?: GoogleCloudDatacatalogV1Taxonomy[];
}
