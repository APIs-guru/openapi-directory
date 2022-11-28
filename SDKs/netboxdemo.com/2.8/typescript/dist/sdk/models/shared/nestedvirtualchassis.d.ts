import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare class NestedVirtualChassis extends SpeakeasyBase {
    id?: number;
    master: NestedDevice;
    memberCount?: number;
    url?: string;
}
