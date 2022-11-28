import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";
/**
 * ExecutionTemplate describes the data an execution should have when created from a template.
**/
export declare class GoogleCloudRunV2ExecutionTemplate extends SpeakeasyBase {
    annotations?: Map<string, string>;
    labels?: Map<string, string>;
    parallelism?: number;
    taskCount?: number;
    template?: GoogleCloudRunV2TaskTemplate;
}
