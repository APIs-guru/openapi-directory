import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";


export enum TargetChangeTargetChangeTypeEnum {
    NoChange = "NO_CHANGE",
    Add = "ADD",
    Remove = "REMOVE",
    Current = "CURRENT",
    Reset = "RESET"
}


// TargetChange
/** 
 * Targets being watched have changed.
**/
export class TargetChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: Status;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetChangeType" })
  targetChangeType?: TargetChangeTargetChangeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=targetIds" })
  targetIds?: number[];
}
