import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareRecipeArtifactGcs
/** 
 * Specifies an artifact available as a Google Cloud Storage object.
**/
export class SoftwareRecipeArtifactGcs extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;
}
