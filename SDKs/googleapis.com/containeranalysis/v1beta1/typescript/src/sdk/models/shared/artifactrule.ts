import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArtifactRule
/** 
 * Defines an object to declare an in-toto artifact rule
**/
export class ArtifactRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactRule" })
  artifactRule?: string[];
}
