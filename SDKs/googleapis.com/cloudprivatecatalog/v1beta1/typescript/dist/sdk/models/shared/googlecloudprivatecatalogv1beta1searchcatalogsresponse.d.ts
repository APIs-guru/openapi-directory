import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Catalog } from "./googlecloudprivatecatalogv1beta1catalog";
/**
 * Response message for PrivateCatalog.SearchCatalogs.
**/
export declare class GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse extends SpeakeasyBase {
    catalogs?: GoogleCloudPrivatecatalogV1beta1Catalog[];
    nextPageToken?: string;
}
