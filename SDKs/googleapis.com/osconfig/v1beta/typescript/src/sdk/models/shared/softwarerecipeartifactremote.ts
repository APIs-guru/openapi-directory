import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareRecipeArtifactRemote
/** 
 * Specifies an artifact available via some URI.
**/
export class SoftwareRecipeArtifactRemote extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
