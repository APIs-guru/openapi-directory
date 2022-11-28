import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SearchCatalogResult } from "./googleclouddatacatalogv1searchcatalogresult";
/**
 * Response message for SearchCatalog.
**/
export declare class GoogleCloudDatacatalogV1SearchCatalogResponse extends SpeakeasyBase {
    nextPageToken?: string;
    results?: GoogleCloudDatacatalogV1SearchCatalogResult[];
    unreachable?: string[];
}
