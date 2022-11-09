import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceInfo } from "./deviceinfo";
import { DeviceNames } from "./devicenames";
import { AgentOtherDeviceId } from "./agentotherdeviceid";
/**
 * Third-party device definition. Next ID = 14
**/
export declare class Device extends SpeakeasyBase {
    attributes?: Map<string, any>;
    customData?: Map<string, any>;
    deviceInfo?: DeviceInfo;
    id?: string;
    name?: DeviceNames;
    notificationSupportedByAgent?: boolean;
    otherDeviceIds?: AgentOtherDeviceId[];
    roomHint?: string;
    structureHint?: string;
    traits?: string[];
    type?: string;
    willReportState?: boolean;
}
