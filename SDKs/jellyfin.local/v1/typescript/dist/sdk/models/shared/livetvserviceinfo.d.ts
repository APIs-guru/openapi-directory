import { SpeakeasyBase } from "../../../internal/utils";
import { LiveTvServiceStatusEnum } from "./livetvservicestatusenum";
/**
 * Class ServiceInfo.
**/
export declare class LiveTvServiceInfo extends SpeakeasyBase {
    hasUpdateAvailable?: boolean;
    homePageUrl?: string;
    isVisible?: boolean;
    name?: string;
    status?: LiveTvServiceStatusEnum;
    statusMessage?: string;
    tuners?: string[];
    version?: string;
}
