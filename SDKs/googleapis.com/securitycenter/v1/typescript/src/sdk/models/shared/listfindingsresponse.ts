import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListFindingsResult } from "./listfindingsresult";


// ListFindingsResponse
/** 
 * Response message for listing findings.
**/
export class ListFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=listFindingsResults", elemType: shared.ListFindingsResult })
  listFindingsResults?: ListFindingsResult[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
