import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppliedLabelChangeDetail } from "./appliedlabelchangedetail";


// AppliedLabelChange
/** 
 * Label changes that were made on the Target.
**/
export class AppliedLabelChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: shared.AppliedLabelChangeDetail })
  changes?: AppliedLabelChangeDetail[];
}
