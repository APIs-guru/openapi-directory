import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchDeployment } from "./patchdeployment";


// ListPatchDeploymentsResponse
/** 
 * A response message for listing patch deployments.
**/
export class ListPatchDeploymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=patchDeployments", elemType: shared.PatchDeployment })
  patchDeployments?: PatchDeployment[];
}
