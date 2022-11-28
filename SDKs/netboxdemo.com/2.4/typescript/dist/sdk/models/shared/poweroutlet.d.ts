import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare class PowerOutlet extends SpeakeasyBase {
    connectedPort?: string;
    device: NestedDevice;
    id?: number;
    name: string;
    tags?: string[];
}
