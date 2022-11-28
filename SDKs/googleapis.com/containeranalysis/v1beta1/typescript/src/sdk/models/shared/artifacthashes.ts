import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArtifactHashes
/** 
 * Defines a hash object for use in Materials and Products.
**/
export class ArtifactHashes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;
}
