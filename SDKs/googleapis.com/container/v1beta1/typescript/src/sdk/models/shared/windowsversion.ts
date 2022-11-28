import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// WindowsVersion
/** 
 * Windows server version.
**/
export class WindowsVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageType" })
  imageType?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=supportEndDate" })
  supportEndDate?: Date;
}
