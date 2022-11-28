import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedPowerOutlet } from "./nestedpoweroutlet";
export declare class PowerPort extends SpeakeasyBase {
    connectionStatus?: boolean;
    device: NestedDevice;
    id?: number;
    name: string;
    powerOutlet?: NestedPowerOutlet;
    tags?: string[];
}
