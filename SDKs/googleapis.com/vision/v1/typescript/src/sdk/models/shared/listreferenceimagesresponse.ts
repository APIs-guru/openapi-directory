import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReferenceImage } from "./referenceimage";



// ListReferenceImagesResponse
/** 
 * Response message for the `ListReferenceImages` method.
**/
export class ListReferenceImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=referenceImages", elemType: ReferenceImage })
  referenceImages?: ReferenceImage[];
}
