import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceProfile } from "./deviceprofile";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";
export declare class ClientCapabilities extends SpeakeasyBase {
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
