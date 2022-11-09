import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";

export enum ListAssetsResultStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Unused = "UNUSED"
,    Added = "ADDED"
,    Removed = "REMOVED"
,    Active = "ACTIVE"
}


// ListAssetsResult
/** 
 * Result containing the Asset and its State.
**/
export class ListAssetsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: Asset;

  @Metadata({ data: "json, name=state" })
  state?: ListAssetsResultStateEnum;
}
