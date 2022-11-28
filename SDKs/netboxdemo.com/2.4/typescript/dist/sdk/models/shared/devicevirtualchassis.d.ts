import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare class DeviceVirtualChassis extends SpeakeasyBase {
    id?: number;
    master: NestedDevice;
    url?: string;
}
