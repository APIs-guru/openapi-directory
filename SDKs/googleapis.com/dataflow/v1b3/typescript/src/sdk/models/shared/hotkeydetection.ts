import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HotKeyDetection
/** 
 * Proto describing a hot key detected on a given WorkItem.
**/
export class HotKeyDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=hotKeyAge" })
  hotKeyAge?: string;

  @Metadata({ data: "json, name=systemName" })
  systemName?: string;

  @Metadata({ data: "json, name=userStepName" })
  userStepName?: string;
}
