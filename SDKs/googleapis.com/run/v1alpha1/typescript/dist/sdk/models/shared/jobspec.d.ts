import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTemplateSpec } from "./instancetemplatespec";
/**
 * JobSpec describes how the job execution will look like.
**/
export declare class JobSpec extends SpeakeasyBase {
    activeDeadlineSeconds?: string;
    backoffLimit?: number;
    completions?: number;
    parallelism?: number;
    template?: InstanceTemplateSpec;
    ttlSecondsAfterFinished?: number;
}
