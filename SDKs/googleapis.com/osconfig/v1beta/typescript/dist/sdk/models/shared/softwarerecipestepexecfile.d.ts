import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Executes an artifact or local file.
**/
export declare class SoftwareRecipeStepExecFile extends SpeakeasyBase {
    allowedExitCodes?: number[];
    args?: string[];
    artifactId?: string;
    localPath?: string;
}
