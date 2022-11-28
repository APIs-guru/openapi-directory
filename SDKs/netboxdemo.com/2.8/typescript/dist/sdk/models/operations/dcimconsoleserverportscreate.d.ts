import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortsCreateRequest extends SpeakeasyBase {
    request: shared.WritableConsoleServerPortInput;
}
export declare class DcimConsoleServerPortsCreateResponse extends SpeakeasyBase {
    consoleServerPort?: shared.ConsoleServerPort;
    contentType: string;
    statusCode: number;
}
