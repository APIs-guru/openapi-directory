import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";
import { Resource } from "./resource";


export enum ListFindingsResultStateChangeEnum {
    Unused = "UNUSED",
    Changed = "CHANGED",
    Unchanged = "UNCHANGED",
    Added = "ADDED",
    Removed = "REMOVED"
}


// ListFindingsResult
/** 
 * Result containing the Finding and its StateChange.
**/
export class ListFindingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finding" })
  finding?: Finding;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Resource;

  @SpeakeasyMetadata({ data: "json, name=stateChange" })
  stateChange?: ListFindingsResultStateChangeEnum;
}
