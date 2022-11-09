import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Change } from "./change";


// ChangeList
/** 
 * A list of changes for a user.
**/
export class ChangeList extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: shared.Change })
  changes?: Change[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newStartPageToken" })
  newStartPageToken?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
