import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipeArtifactGcs } from "./softwarerecipeartifactgcs";
import { SoftwareRecipeArtifactRemote } from "./softwarerecipeartifactremote";



// SoftwareRecipeArtifact
/** 
 * Specifies a resource to be used in the recipe.
**/
export class SoftwareRecipeArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowInsecure" })
  allowInsecure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gcs" })
  gcs?: SoftwareRecipeArtifactGcs;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=remote" })
  remote?: SoftwareRecipeArtifactRemote;
}
