import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListFindingsResult } from "./listfindingsresult";



// ListFindingsResponse
/** 
 * Response message for listing findings.
**/
export class ListFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listFindingsResults", elemType: ListFindingsResult })
  listFindingsResults?: ListFindingsResult[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
