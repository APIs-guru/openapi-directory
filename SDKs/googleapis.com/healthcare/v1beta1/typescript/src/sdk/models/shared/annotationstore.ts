import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnnotationStore
/** 
 * An Annotation store that can store annotation resources such as labels and tags for text, image and audio.
**/
export class AnnotationStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
