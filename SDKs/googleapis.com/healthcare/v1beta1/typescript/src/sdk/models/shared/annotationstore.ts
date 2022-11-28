import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnnotationStore
/** 
 * An Annotation store that can store annotation resources such as labels and tags for text, image and audio.
**/
export class AnnotationStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
