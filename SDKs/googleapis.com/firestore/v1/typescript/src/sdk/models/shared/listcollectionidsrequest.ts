import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListCollectionIdsRequest
/** 
 * The request for Firestore.ListCollectionIds.
**/
export class ListCollectionIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;
}
