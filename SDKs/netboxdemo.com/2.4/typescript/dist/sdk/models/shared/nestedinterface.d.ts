import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare class NestedInterface extends SpeakeasyBase {
    device?: NestedDevice;
    id?: number;
    isConnected?: string;
    name: string;
    url?: string;
}
