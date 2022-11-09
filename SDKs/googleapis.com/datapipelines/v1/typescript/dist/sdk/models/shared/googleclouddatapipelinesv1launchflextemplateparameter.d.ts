import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment } from "./googleclouddatapipelinesv1flextemplateruntimeenvironment";
/**
 * Launch Flex Template parameter.
**/
export declare class GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter extends SpeakeasyBase {
    containerSpecGcsPath?: string;
    environment?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
    jobName?: string;
    launchOptions?: Map<string, string>;
    parameters?: Map<string, string>;
    transformNameMappings?: Map<string, string>;
    update?: boolean;
}
