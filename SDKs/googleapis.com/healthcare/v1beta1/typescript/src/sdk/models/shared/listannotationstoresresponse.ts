import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnnotationStore } from "./annotationstore";


// ListAnnotationStoresResponse
/** 
 * Lists the Annotation stores in the given dataset.
**/
export class ListAnnotationStoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationStores", elemType: shared.AnnotationStore })
  annotationStores?: AnnotationStore[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
