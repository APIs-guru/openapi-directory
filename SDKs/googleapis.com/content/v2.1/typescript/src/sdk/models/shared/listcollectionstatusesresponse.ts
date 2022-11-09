import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CollectionStatus } from "./collectionstatus";


// ListCollectionStatusesResponse
/** 
 * Response message for the ListCollectionStatuses method.
**/
export class ListCollectionStatusesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.CollectionStatus })
  resources?: CollectionStatus[];
}
