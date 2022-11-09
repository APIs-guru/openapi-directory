import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SasPortalDeployment } from "./sasportaldeployment";


// SasPortalListDeploymentsResponse
/** 
 * Response for ListDeployments.
**/
export class SasPortalListDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.SasPortalDeployment })
  deployments?: SasPortalDeployment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
