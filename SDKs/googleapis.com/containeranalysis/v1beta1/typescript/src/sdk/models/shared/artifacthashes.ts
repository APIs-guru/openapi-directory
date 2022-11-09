import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArtifactHashes
/** 
 * Defines a hash object for use in Materials and Products.
**/
export class ArtifactHashes extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha256" })
  sha256?: string;
}
