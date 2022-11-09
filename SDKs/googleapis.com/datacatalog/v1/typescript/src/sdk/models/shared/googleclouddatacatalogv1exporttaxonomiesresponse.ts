import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1SerializedTaxonomy } from "./googleclouddatacatalogv1serializedtaxonomy";


// GoogleCloudDatacatalogV1ExportTaxonomiesResponse
/** 
 * Response message for ExportTaxonomies.
**/
export class GoogleCloudDatacatalogV1ExportTaxonomiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxonomies", elemType: shared.GoogleCloudDatacatalogV1SerializedTaxonomy })
  taxonomies?: GoogleCloudDatacatalogV1SerializedTaxonomy[];
}
