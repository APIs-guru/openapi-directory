import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Change } from "./change";
import { ResponseHeader } from "./responseheader";


// ChangesListResponse
/** 
 * The response to a request to enumerate Changes to a ResourceRecordSets collection.
**/
export class ChangesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: shared.Change })
  changes?: Change[];

  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
