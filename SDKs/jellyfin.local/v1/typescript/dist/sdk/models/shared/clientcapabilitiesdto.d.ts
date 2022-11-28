import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceProfile } from "./deviceprofile";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";
/**
 * Client capabilities dto.
**/
export declare class ClientCapabilitiesDto extends SpeakeasyBase {
    appStoreUrl?: string;
    deviceProfile?: DeviceProfile;
    iconUrl?: string;
    messageCallbackUrl?: string;
    playableMediaTypes?: string[];
    supportedCommands?: GeneralCommandTypeEnum[];
    supportsContentUploading?: boolean;
    supportsMediaControl?: boolean;
    supportsPersistentIdentifier?: boolean;
    supportsSync?: boolean;
}
