import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationStore } from "./annotationstore";
/**
 * Lists the Annotation stores in the given dataset.
**/
export declare class ListAnnotationStoresResponse extends SpeakeasyBase {
    annotationStores?: AnnotationStore[];
    nextPageToken?: string;
}
