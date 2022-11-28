import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArtifactRule
/** 
 * Defines an object to declare an in-toto artifact rule
**/
export class ArtifactRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactRule" })
  artifactRule?: string[];
}
