import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchDeployment } from "./patchdeployment";



// ListPatchDeploymentsResponse
/** 
 * A response message for listing patch deployments.
**/
export class ListPatchDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=patchDeployments", elemType: PatchDeployment })
  patchDeployments?: PatchDeployment[];
}
