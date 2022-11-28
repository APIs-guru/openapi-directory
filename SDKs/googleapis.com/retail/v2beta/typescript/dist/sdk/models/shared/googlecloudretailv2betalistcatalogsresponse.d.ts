import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCatalog } from "./googlecloudretailv2betacatalog";
/**
 * Response for CatalogService.ListCatalogs method.
**/
export declare class GoogleCloudRetailV2betaListCatalogsResponse extends SpeakeasyBase {
    catalogs?: GoogleCloudRetailV2betaCatalog[];
    nextPageToken?: string;
}
