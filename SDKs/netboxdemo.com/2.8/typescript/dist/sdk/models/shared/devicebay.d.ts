import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare class DeviceBay extends SpeakeasyBase {
    description?: string;
    device: NestedDevice;
    id?: number;
    installedDevice?: NestedDevice;
    name: string;
    tags?: string[];
}
