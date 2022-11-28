import { SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipeArtifactGcs } from "./softwarerecipeartifactgcs";
import { SoftwareRecipeArtifactRemote } from "./softwarerecipeartifactremote";
/**
 * Specifies a resource to be used in the recipe.
**/
export declare class SoftwareRecipeArtifact extends SpeakeasyBase {
    allowInsecure?: boolean;
    gcs?: SoftwareRecipeArtifactGcs;
    id?: string;
    remote?: SoftwareRecipeArtifactRemote;
}
