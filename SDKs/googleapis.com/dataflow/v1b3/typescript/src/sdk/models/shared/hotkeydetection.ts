import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HotKeyDetection
/** 
 * Proto describing a hot key detected on a given WorkItem.
**/
export class HotKeyDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hotKeyAge" })
  hotKeyAge?: string;

  @SpeakeasyMetadata({ data: "json, name=systemName" })
  systemName?: string;

  @SpeakeasyMetadata({ data: "json, name=userStepName" })
  userStepName?: string;
}
