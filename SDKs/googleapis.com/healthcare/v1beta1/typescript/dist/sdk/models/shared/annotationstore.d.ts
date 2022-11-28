import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Annotation store that can store annotation resources such as labels and tags for text, image and audio.
**/
export declare class AnnotationStore extends SpeakeasyBase {
    labels?: Map<string, string>;
    name?: string;
}
