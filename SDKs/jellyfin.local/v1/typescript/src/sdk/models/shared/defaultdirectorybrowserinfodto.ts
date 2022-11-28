import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultDirectoryBrowserInfoDto
/** 
 * Default directory browser info.
**/
export class DefaultDirectoryBrowserInfoDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;
}
