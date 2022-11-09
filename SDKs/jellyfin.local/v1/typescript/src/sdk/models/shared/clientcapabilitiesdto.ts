import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceProfile } from "./deviceprofile";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";


// ClientCapabilitiesDto
/** 
 * Client capabilities dto.
**/
export class ClientCapabilitiesDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppStoreUrl" })
  appStoreUrl?: string;

  @Metadata({ data: "json, name=DeviceProfile" })
  deviceProfile?: DeviceProfile;

  @Metadata({ data: "json, name=IconUrl" })
  iconUrl?: string;

  @Metadata({ data: "json, name=MessageCallbackUrl" })
  messageCallbackUrl?: string;

  @Metadata({ data: "json, name=PlayableMediaTypes" })
  playableMediaTypes?: string[];

  @Metadata({ data: "json, name=SupportedCommands" })
  supportedCommands?: GeneralCommandTypeEnum[];

  @Metadata({ data: "json, name=SupportsContentUploading" })
  supportsContentUploading?: boolean;

  @Metadata({ data: "json, name=SupportsMediaControl" })
  supportsMediaControl?: boolean;

  @Metadata({ data: "json, name=SupportsPersistentIdentifier" })
  supportsPersistentIdentifier?: boolean;

  @Metadata({ data: "json, name=SupportsSync" })
  supportsSync?: boolean;
}
