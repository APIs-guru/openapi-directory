import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";


// ListPhotoSequencesResponse
/** 
 * Response to list all photo sequences that belong to a user.
**/
export class ListPhotoSequencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=photoSequences", elemType: shared.Operation })
  photoSequences?: Operation[];
}
