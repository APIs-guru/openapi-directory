import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";

export enum TargetChangeTargetChangeTypeEnum {
    NoChange = "NO_CHANGE"
,    Add = "ADD"
,    Remove = "REMOVE"
,    Current = "CURRENT"
,    Reset = "RESET"
}


// TargetChange
/** 
 * Targets being watched have changed.
**/
export class TargetChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: Status;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @Metadata({ data: "json, name=targetChangeType" })
  targetChangeType?: TargetChangeTargetChangeTypeEnum;

  @Metadata({ data: "json, name=targetIds" })
  targetIds?: number[];
}
