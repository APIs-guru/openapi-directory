import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystemEntryTypeEnum } from "./filesystementrytypeenum";



// FileSystemEntryInfo
/** 
 * Class FileSystemEntryInfo.
**/
export class FileSystemEntryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: FileSystemEntryTypeEnum;
}
