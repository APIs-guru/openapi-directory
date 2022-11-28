import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { EnvironmentVariable } from "./environmentvariable";
/**
 * Represents an operating system process.
**/
export declare class Process extends SpeakeasyBase {
    args?: string[];
    argumentsTruncated?: boolean;
    binary?: File;
    envVariables?: EnvironmentVariable[];
    envVariablesTruncated?: boolean;
    libraries?: File[];
    name?: string;
    parentPid?: string;
    pid?: string;
    script?: File;
}
