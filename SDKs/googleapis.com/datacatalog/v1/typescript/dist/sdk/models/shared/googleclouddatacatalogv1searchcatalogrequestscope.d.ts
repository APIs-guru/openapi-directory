import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The criteria that select the subspace used for query matching.
**/
export declare class GoogleCloudDatacatalogV1SearchCatalogRequestScope extends SpeakeasyBase {
    includeGcpPublicDatasets?: boolean;
    includeOrgIds?: string[];
    includeProjectIds?: string[];
    includePublicTagTemplates?: boolean;
    restrictedLocations?: string[];
    starredOnly?: boolean;
}
