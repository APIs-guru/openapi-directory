import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare class ConsoleServerPort extends SpeakeasyBase {
    connectedConsole?: string;
    device: NestedDevice;
    id?: number;
    name: string;
    tags?: string[];
}
