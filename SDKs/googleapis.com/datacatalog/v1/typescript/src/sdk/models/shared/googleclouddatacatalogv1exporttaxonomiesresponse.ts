import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SerializedTaxonomy } from "./googleclouddatacatalogv1serializedtaxonomy";



// GoogleCloudDatacatalogV1ExportTaxonomiesResponse
/** 
 * Response message for ExportTaxonomies.
**/
export class GoogleCloudDatacatalogV1ExportTaxonomiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxonomies", elemType: GoogleCloudDatacatalogV1SerializedTaxonomy })
  taxonomies?: GoogleCloudDatacatalogV1SerializedTaxonomy[];
}
