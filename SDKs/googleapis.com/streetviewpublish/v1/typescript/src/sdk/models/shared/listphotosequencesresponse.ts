import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



// ListPhotoSequencesResponse
/** 
 * Response to list all photo sequences that belong to a user.
**/
export class ListPhotoSequencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=photoSequences", elemType: Operation })
  photoSequences?: Operation[];
}
