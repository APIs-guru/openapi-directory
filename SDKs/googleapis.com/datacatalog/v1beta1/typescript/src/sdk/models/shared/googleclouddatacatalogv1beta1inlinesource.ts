import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SerializedTaxonomy } from "./googleclouddatacatalogv1beta1serializedtaxonomy";



// GoogleCloudDatacatalogV1beta1InlineSource
/** 
 * Inline source used for taxonomies import.
**/
export class GoogleCloudDatacatalogV1beta1InlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxonomies", elemType: GoogleCloudDatacatalogV1beta1SerializedTaxonomy })
  taxonomies?: GoogleCloudDatacatalogV1beta1SerializedTaxonomy[];
}
