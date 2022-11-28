import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SerializedTaxonomy } from "./googleclouddatacatalogv1beta1serializedtaxonomy";



// GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
/** 
 * Response message for ExportTaxonomies.
**/
export class GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxonomies", elemType: GoogleCloudDatacatalogV1beta1SerializedTaxonomy })
  taxonomies?: GoogleCloudDatacatalogV1beta1SerializedTaxonomy[];
}
