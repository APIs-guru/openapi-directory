import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SerializedTaxonomy } from "./googleclouddatacatalogv1serializedtaxonomy";



// GoogleCloudDatacatalogV1InlineSource
/** 
 * Inline source containing taxonomies to import.
**/
export class GoogleCloudDatacatalogV1InlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxonomies", elemType: GoogleCloudDatacatalogV1SerializedTaxonomy })
  taxonomies?: GoogleCloudDatacatalogV1SerializedTaxonomy[];
}
