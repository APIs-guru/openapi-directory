import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListCollectionIdsResponse
/** 
 * The response from Firestore.ListCollectionIds.
**/
export class ListCollectionIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionIds" })
  collectionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
