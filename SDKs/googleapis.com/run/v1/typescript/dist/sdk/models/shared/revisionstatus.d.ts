import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
/**
 * RevisionStatus communicates the observed state of the Revision (from the controller).
**/
export declare class RevisionStatus extends SpeakeasyBase {
    conditions?: GoogleCloudRunV1Condition[];
    imageDigest?: string;
    logUrl?: string;
    observedGeneration?: number;
    serviceName?: string;
}
