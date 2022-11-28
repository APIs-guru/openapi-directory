import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareRecipeArtifactRemote
/** 
 * Specifies an artifact available via some URI.
**/
export class SoftwareRecipeArtifactRemote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
