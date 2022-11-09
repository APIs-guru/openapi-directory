import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1CrossRegionalSource } from "./googleclouddatacatalogv1crossregionalsource";
import { GoogleCloudDatacatalogV1InlineSource } from "./googleclouddatacatalogv1inlinesource";


// GoogleCloudDatacatalogV1ImportTaxonomiesRequest
/** 
 * Request message for ImportTaxonomies.
**/
export class GoogleCloudDatacatalogV1ImportTaxonomiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=crossRegionalSource" })
  crossRegionalSource?: GoogleCloudDatacatalogV1CrossRegionalSource;

  @Metadata({ data: "json, name=inlineSource" })
  inlineSource?: GoogleCloudDatacatalogV1InlineSource;
}
