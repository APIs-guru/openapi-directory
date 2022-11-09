import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1SerializedTaxonomy } from "./googleclouddatacatalogv1beta1serializedtaxonomy";


// GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
/** 
 * Response message for ExportTaxonomies.
**/
export class GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxonomies", elemType: shared.GoogleCloudDatacatalogV1beta1SerializedTaxonomy })
  taxonomies?: GoogleCloudDatacatalogV1beta1SerializedTaxonomy[];
}
