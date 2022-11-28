import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartupRemoteAccessDto
/** 
 * Startup remote access dto.
**/
export class StartupRemoteAccessDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnableAutomaticPortMapping" })
  enableAutomaticPortMapping: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" })
  enableRemoteAccess: boolean;
}
