import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListCollectionIdsRequest
/** 
 * The request for Firestore.ListCollectionIds.
**/
export class ListCollectionIdsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;
}
