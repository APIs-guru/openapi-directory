import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartupRemoteAccessDto
/** 
 * Startup remote access dto.
**/
export class StartupRemoteAccessDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableAutomaticPortMapping" })
  enableAutomaticPortMapping: boolean;

  @Metadata({ data: "json, name=EnableRemoteAccess" })
  enableRemoteAccess: boolean;
}
