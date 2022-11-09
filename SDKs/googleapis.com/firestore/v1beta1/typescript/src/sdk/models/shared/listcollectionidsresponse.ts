import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListCollectionIdsResponse
/** 
 * The response from Firestore.ListCollectionIds.
**/
export class ListCollectionIdsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionIds" })
  collectionIds?: string[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
