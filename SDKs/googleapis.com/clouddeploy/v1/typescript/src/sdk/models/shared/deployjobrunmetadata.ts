import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudRunMetadata } from "./cloudrunmetadata";



// DeployJobRunMetadata
/** 
 * DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.
**/
export class DeployJobRunMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRunMetadata;
}
