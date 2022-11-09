import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Finding } from "./finding";
import { Resource } from "./resource";

export enum ListFindingsResultStateChangeEnum {
    Unused = "UNUSED"
,    Changed = "CHANGED"
,    Unchanged = "UNCHANGED"
,    Added = "ADDED"
,    Removed = "REMOVED"
}


// ListFindingsResult
/** 
 * Result containing the Finding and its StateChange.
**/
export class ListFindingsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=finding" })
  finding?: Finding;

  @Metadata({ data: "json, name=resource" })
  resource?: Resource;

  @Metadata({ data: "json, name=stateChange" })
  stateChange?: ListFindingsResultStateChangeEnum;
}
