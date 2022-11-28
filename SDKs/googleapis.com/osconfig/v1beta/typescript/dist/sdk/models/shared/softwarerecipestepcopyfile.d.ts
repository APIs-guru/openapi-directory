import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Copies the artifact to the specified path on the instance.
**/
export declare class SoftwareRecipeStepCopyFile extends SpeakeasyBase {
    artifactId?: string;
    destination?: string;
    overwrite?: boolean;
    permissions?: string;
}
