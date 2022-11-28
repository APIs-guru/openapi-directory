import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SerializedTaxonomy } from "./googleclouddatacatalogv1serializedtaxonomy";



// GoogleCloudDatacatalogV1ReplaceTaxonomyRequest
/** 
 * Request message for ReplaceTaxonomy.
**/
export class GoogleCloudDatacatalogV1ReplaceTaxonomyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serializedTaxonomy" })
  serializedTaxonomy?: GoogleCloudDatacatalogV1SerializedTaxonomy;
}
