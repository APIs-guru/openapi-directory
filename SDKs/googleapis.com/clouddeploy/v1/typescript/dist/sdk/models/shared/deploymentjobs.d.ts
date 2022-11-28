import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Deployment job composition.
**/
export declare class DeploymentJobs extends SpeakeasyBase {
    deployJob?: Job;
    verifyJob?: Job;
}
