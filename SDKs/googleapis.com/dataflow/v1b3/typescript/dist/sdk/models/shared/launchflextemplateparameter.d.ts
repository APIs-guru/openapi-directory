import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerSpec } from "./containerspec";
import { FlexTemplateRuntimeEnvironment } from "./flextemplateruntimeenvironment";
/**
 * Launch FlexTemplate Parameter.
**/
export declare class LaunchFlexTemplateParameter extends SpeakeasyBase {
    containerSpec?: ContainerSpec;
    containerSpecGcsPath?: string;
    environment?: FlexTemplateRuntimeEnvironment;
    jobName?: string;
    launchOptions?: Map<string, string>;
    parameters?: Map<string, string>;
    transformNameMappings?: Map<string, string>;
    update?: boolean;
}
