import { SpeakeasyBase } from "../../../internal/utils";
import { ClientCapabilities } from "./clientcapabilities";
export declare class DeviceInfo extends SpeakeasyBase {
    appName?: string;
    appVersion?: string;
    capabilities?: ClientCapabilities;
    dateLastActivity?: Date;
    iconUrl?: string;
    id?: string;
    lastUserId?: string;
    lastUserName?: string;
    name?: string;
}
