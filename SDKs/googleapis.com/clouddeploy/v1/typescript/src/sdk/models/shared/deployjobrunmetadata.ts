import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudRunMetadata } from "./cloudrunmetadata";


// DeployJobRunMetadata
/** 
 * DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.
**/
export class DeployJobRunMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRunMetadata;
}
