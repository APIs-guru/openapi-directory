import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Annotation } from "./annotation";



// ListAnnotationsResponse
/** 
 * Lists the Annotations in the specified Annotation store.
**/
export class ListAnnotationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: Annotation })
  annotations?: Annotation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
