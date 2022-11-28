import { SpeakeasyBase } from "../../../internal/utils";
import { LiveTvServiceInfo } from "./livetvserviceinfo";
export declare class LiveTvInfo extends SpeakeasyBase {
    enabledUsers?: string[];
    isEnabled?: boolean;
    services?: LiveTvServiceInfo[];
}
