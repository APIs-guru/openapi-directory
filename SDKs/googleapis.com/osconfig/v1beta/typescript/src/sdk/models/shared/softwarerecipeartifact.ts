import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SoftwareRecipeArtifactGcs } from "./softwarerecipeartifactgcs";
import { SoftwareRecipeArtifactRemote } from "./softwarerecipeartifactremote";


// SoftwareRecipeArtifact
/** 
 * Specifies a resource to be used in the recipe.
**/
export class SoftwareRecipeArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowInsecure" })
  allowInsecure?: boolean;

  @Metadata({ data: "json, name=gcs" })
  gcs?: SoftwareRecipeArtifactGcs;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=remote" })
  remote?: SoftwareRecipeArtifactRemote;
}
