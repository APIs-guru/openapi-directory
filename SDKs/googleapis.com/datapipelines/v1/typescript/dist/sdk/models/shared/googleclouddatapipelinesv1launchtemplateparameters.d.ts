import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1RuntimeEnvironment } from "./googleclouddatapipelinesv1runtimeenvironment";
/**
 * Parameters to provide to the template being launched.
**/
export declare class GoogleCloudDatapipelinesV1LaunchTemplateParameters extends SpeakeasyBase {
    environment?: GoogleCloudDatapipelinesV1RuntimeEnvironment;
    jobName?: string;
    parameters?: Map<string, string>;
    transformNameMapping?: Map<string, string>;
    update?: boolean;
}
