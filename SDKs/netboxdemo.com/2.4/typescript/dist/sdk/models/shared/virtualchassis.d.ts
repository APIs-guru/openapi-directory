import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare class VirtualChassis extends SpeakeasyBase {
    domain?: string;
    id?: number;
    master: NestedDevice;
    tags?: string[];
}
