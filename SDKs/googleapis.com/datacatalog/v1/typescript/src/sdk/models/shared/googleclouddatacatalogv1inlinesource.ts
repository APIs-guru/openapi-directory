import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1SerializedTaxonomy } from "./googleclouddatacatalogv1serializedtaxonomy";


// GoogleCloudDatacatalogV1InlineSource
/** 
 * Inline source containing taxonomies to import.
**/
export class GoogleCloudDatacatalogV1InlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxonomies", elemType: shared.GoogleCloudDatacatalogV1SerializedTaxonomy })
  taxonomies?: GoogleCloudDatacatalogV1SerializedTaxonomy[];
}
