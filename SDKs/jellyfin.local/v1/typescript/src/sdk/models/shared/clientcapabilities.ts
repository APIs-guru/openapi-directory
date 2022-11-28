import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceProfile } from "./deviceprofile";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";



export class ClientCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppStoreUrl" })
  appStoreUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceProfile" })
  deviceProfile?: DeviceProfile;

  @SpeakeasyMetadata({ data: "json, name=IconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=MessageCallbackUrl" })
  messageCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayableMediaTypes" })
  playableMediaTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=SupportedCommands" })
  supportedCommands?: GeneralCommandTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=SupportsContentUploading" })
  supportsContentUploading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsMediaControl" })
  supportsMediaControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsPersistentIdentifier" })
  supportsPersistentIdentifier?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsSync" })
  supportsSync?: boolean;
}
