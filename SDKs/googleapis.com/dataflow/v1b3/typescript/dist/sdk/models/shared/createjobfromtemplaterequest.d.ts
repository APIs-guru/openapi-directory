import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnvironment } from "./runtimeenvironment";
/**
 * A request to create a Cloud Dataflow job from a template.
**/
export declare class CreateJobFromTemplateRequest extends SpeakeasyBase {
    environment?: RuntimeEnvironment;
    gcsPath?: string;
    jobName?: string;
    location?: string;
    parameters?: Map<string, string>;
}
