import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuildArtifact
/** 
 * Description of an a image to use during Skaffold rendering.
**/
export class BuildArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
