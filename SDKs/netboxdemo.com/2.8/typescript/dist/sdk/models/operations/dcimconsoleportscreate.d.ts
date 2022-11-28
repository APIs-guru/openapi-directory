import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortsCreateRequest extends SpeakeasyBase {
    request: shared.WritableConsolePortInput;
}
export declare class DcimConsolePortsCreateResponse extends SpeakeasyBase {
    consolePort?: shared.ConsolePort;
    contentType: string;
    statusCode: number;
}
