import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Taxonomy } from "./googleclouddatacatalogv1taxonomy";
/**
 * Response message for ListTaxonomies.
**/
export declare class GoogleCloudDatacatalogV1ListTaxonomiesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    taxonomies?: GoogleCloudDatacatalogV1Taxonomy[];
}
