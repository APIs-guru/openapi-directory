import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// DeploymentJobs
/** 
 * Deployment job composition.
**/
export class DeploymentJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployJob" })
  deployJob?: Job;

  @SpeakeasyMetadata({ data: "json, name=verifyJob" })
  verifyJob?: Job;
}
