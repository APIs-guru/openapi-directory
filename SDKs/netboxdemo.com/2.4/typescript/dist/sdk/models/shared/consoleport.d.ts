import { SpeakeasyBase } from "../../../internal/utils";
import { NestedConsoleServerPort } from "./nestedconsoleserverport";
import { NestedDevice } from "./nesteddevice";
export declare class ConsolePort extends SpeakeasyBase {
    connectionStatus?: boolean;
    csPort?: NestedConsoleServerPort;
    device: NestedDevice;
    id?: number;
    name: string;
    tags?: string[];
}
