import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2EnvVarSource } from "./googlecloudrunv2envvarsource";
/**
 * EnvVar represents an environment variable present in a Container.
**/
export declare class GoogleCloudRunV2EnvVar extends SpeakeasyBase {
    name?: string;
    value?: string;
    valueSource?: GoogleCloudRunV2EnvVarSource;
}
