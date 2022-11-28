import { SpeakeasyBase } from "../../../internal/utils";
import { EnvVarSource } from "./envvarsource";
/**
 * EnvVar represents an environment variable present in a Container.
**/
export declare class EnvVar extends SpeakeasyBase {
    name?: string;
    value?: string;
    valueFrom?: EnvVarSource;
}
