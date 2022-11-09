import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";
import { Job } from "./job";


// DeploymentJobs
/** 
 * Deployment job composition.
**/
export class DeploymentJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployJob" })
  deployJob?: Job;

  @Metadata({ data: "json, name=verifyJob" })
  verifyJob?: Job;
}
