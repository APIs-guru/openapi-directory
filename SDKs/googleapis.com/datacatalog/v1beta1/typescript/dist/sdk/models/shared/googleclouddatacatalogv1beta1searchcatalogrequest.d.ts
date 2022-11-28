import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope } from "./googleclouddatacatalogv1beta1searchcatalogrequestscope";
/**
 * Request message for SearchCatalog.
**/
export declare class GoogleCloudDatacatalogV1beta1SearchCatalogRequest extends SpeakeasyBase {
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    query?: string;
    scope?: GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
}
