import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Catalog } from "./googlecloudretailv2catalog";
/**
 * Response for CatalogService.ListCatalogs method.
**/
export declare class GoogleCloudRetailV2ListCatalogsResponse extends SpeakeasyBase {
    catalogs?: GoogleCloudRetailV2Catalog[];
    nextPageToken?: string;
}
