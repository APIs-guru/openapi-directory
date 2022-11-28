import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsoleServerPortsReadRequest extends SpeakeasyBase {
    pathParams: DcimConsoleServerPortsReadPathParams;
}
export declare class DcimConsoleServerPortsReadResponse extends SpeakeasyBase {
    consoleServerPort?: shared.ConsoleServerPort;
    contentType: string;
    statusCode: number;
}
