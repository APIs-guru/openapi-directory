import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1CrossRegionalSource } from "./googleclouddatacatalogv1crossregionalsource";
import { GoogleCloudDatacatalogV1InlineSource } from "./googleclouddatacatalogv1inlinesource";
/**
 * Request message for ImportTaxonomies.
**/
export declare class GoogleCloudDatacatalogV1ImportTaxonomiesRequest extends SpeakeasyBase {
    crossRegionalSource?: GoogleCloudDatacatalogV1CrossRegionalSource;
    inlineSource?: GoogleCloudDatacatalogV1InlineSource;
}
