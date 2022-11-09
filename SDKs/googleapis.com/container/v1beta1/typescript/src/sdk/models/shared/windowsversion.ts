import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";


// WindowsVersion
/** 
 * Windows server version.
**/
export class WindowsVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageType" })
  imageType?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=supportEndDate" })
  supportEndDate?: Date;
}
