import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileSystemEntryTypeEnum } from "./filesystementrytypeenum";


// FileSystemEntryInfo
/** 
 * Class FileSystemEntryInfo.
**/
export class FileSystemEntryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Type" })
  type?: FileSystemEntryTypeEnum;
}
