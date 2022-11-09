import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Annotation } from "./annotation";


// ListAnnotationsResponse
/** 
 * Lists the Annotations in the specified Annotation store.
**/
export class ListAnnotationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations", elemType: shared.Annotation })
  annotations?: Annotation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
