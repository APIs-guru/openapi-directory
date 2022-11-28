import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppliedLabelChangeDetail } from "./appliedlabelchangedetail";



// AppliedLabelChange
/** 
 * Label changes that were made on the Target.
**/
export class AppliedLabelChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: AppliedLabelChangeDetail })
  changes?: AppliedLabelChangeDetail[];
}
