import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchFoldersRequest
/** 
 * The request message for searching folders.
**/
export class SearchFoldersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;
}
