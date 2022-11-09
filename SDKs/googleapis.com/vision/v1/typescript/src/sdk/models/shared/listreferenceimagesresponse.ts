import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReferenceImage } from "./referenceimage";


// ListReferenceImagesResponse
/** 
 * Response message for the `ListReferenceImages` method.
**/
export class ListReferenceImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=referenceImages", elemType: shared.ReferenceImage })
  referenceImages?: ReferenceImage[];
}
