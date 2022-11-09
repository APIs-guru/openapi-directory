import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultDirectoryBrowserInfoDto
/** 
 * Default directory browser info.
**/
export class DefaultDirectoryBrowserInfoDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Path" })
  path?: string;
}
