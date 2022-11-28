import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SearchCatalogRequestScope } from "./googleclouddatacatalogv1searchcatalogrequestscope";
/**
 * Request message for SearchCatalog.
**/
export declare class GoogleCloudDatacatalogV1SearchCatalogRequest extends SpeakeasyBase {
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    query?: string;
    scope?: GoogleCloudDatacatalogV1SearchCatalogRequestScope;
}
