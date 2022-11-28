import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildArtifact
/** 
 * Description of an a image to use during Skaffold rendering.
**/
export class BuildArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
