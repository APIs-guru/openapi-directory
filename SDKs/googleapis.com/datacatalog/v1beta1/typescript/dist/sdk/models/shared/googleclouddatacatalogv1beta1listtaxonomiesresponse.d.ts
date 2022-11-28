import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Taxonomy } from "./googleclouddatacatalogv1beta1taxonomy";
/**
 * Response message for ListTaxonomies.
**/
export declare class GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    taxonomies?: GoogleCloudDatacatalogV1beta1Taxonomy[];
}
