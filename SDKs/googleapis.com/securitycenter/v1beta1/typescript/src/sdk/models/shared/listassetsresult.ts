import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";


export enum ListAssetsResultStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Unused = "UNUSED",
    Added = "ADDED",
    Removed = "REMOVED",
    Active = "ACTIVE"
}


// ListAssetsResult
/** 
 * Result containing the Asset and its State.
**/
export class ListAssetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: Asset;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ListAssetsResultStateEnum;
}
