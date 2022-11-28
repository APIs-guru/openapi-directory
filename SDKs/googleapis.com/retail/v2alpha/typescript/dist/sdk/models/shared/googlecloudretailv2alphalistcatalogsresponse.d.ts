import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCatalog } from "./googlecloudretailv2alphacatalog";
/**
 * Response for CatalogService.ListCatalogs method.
**/
export declare class GoogleCloudRetailV2alphaListCatalogsResponse extends SpeakeasyBase {
    catalogs?: GoogleCloudRetailV2alphaCatalog[];
    nextPageToken?: string;
}
