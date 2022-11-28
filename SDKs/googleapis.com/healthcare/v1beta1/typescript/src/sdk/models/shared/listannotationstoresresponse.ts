import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotationStore } from "./annotationstore";



// ListAnnotationStoresResponse
/** 
 * Lists the Annotation stores in the given dataset.
**/
export class ListAnnotationStoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationStores", elemType: AnnotationStore })
  annotationStores?: AnnotationStore[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
