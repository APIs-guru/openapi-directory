import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies the selection and configuration of software inside the environment.
**/
export declare class SoftwareConfig extends SpeakeasyBase {
    airflowConfigOverrides?: Map<string, string>;
    envVariables?: Map<string, string>;
    imageVersion?: string;
    pypiPackages?: Map<string, string>;
    pythonVersion?: string;
    schedulerCount?: number;
}
