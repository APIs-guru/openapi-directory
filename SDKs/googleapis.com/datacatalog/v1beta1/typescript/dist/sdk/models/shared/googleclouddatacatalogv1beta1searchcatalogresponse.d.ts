import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SearchCatalogResult } from "./googleclouddatacatalogv1beta1searchcatalogresult";
/**
 * Response message for SearchCatalog.
**/
export declare class GoogleCloudDatacatalogV1beta1SearchCatalogResponse extends SpeakeasyBase {
    nextPageToken?: string;
    results?: GoogleCloudDatacatalogV1beta1SearchCatalogResult[];
    unreachable?: string[];
}
