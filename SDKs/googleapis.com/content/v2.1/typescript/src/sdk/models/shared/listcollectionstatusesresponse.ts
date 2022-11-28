import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatus } from "./collectionstatus";



// ListCollectionStatusesResponse
/** 
 * Response message for the ListCollectionStatuses method.
**/
export class ListCollectionStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: CollectionStatus })
  resources?: CollectionStatus[];
}
