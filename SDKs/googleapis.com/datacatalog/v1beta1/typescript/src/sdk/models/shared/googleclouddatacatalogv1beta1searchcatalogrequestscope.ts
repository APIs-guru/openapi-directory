import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope
/** 
 * The criteria that select the subspace used for query matching.
**/
export class GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeGcpPublicDatasets" })
  includeGcpPublicDatasets?: boolean;

  @Metadata({ data: "json, name=includeOrgIds" })
  includeOrgIds?: string[];

  @Metadata({ data: "json, name=includeProjectIds" })
  includeProjectIds?: string[];

  @Metadata({ data: "json, name=restrictedLocations" })
  restrictedLocations?: string[];
}
