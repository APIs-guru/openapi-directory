import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareRecipeArtifactGcs
/** 
 * Specifies an artifact available as a Google Cloud Storage object.
**/
export class SoftwareRecipeArtifactGcs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
