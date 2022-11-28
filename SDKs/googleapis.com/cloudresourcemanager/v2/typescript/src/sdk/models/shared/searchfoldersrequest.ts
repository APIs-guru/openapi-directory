import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchFoldersRequest
/** 
 * The request message for searching folders.
**/
export class SearchFoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;
}
