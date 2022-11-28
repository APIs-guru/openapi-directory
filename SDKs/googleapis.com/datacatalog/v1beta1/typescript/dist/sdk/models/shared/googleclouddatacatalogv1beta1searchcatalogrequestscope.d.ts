import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The criteria that select the subspace used for query matching.
**/
export declare class GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope extends SpeakeasyBase {
    includeGcpPublicDatasets?: boolean;
    includeOrgIds?: string[];
    includeProjectIds?: string[];
    restrictedLocations?: string[];
}
