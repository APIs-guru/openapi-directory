import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeployment } from "./sasportaldeployment";



// SasPortalListDeploymentsResponse
/** 
 * Response for ListDeployments.
**/
export class SasPortalListDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: SasPortalDeployment })
  deployments?: SasPortalDeployment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
