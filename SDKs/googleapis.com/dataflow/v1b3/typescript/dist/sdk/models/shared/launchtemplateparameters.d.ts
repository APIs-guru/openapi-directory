import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnvironment } from "./runtimeenvironment";
/**
 * Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.
**/
export declare class LaunchTemplateParameters extends SpeakeasyBase {
    environment?: RuntimeEnvironment;
    jobName?: string;
    parameters?: Map<string, string>;
    transformNameMapping?: Map<string, string>;
    update?: boolean;
}
