import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope
/** 
 * The criteria that select the subspace used for query matching.
**/
export class GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeGcpPublicDatasets" })
  includeGcpPublicDatasets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeOrgIds" })
  includeOrgIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=includeProjectIds" })
  includeProjectIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=restrictedLocations" })
  restrictedLocations?: string[];
}
