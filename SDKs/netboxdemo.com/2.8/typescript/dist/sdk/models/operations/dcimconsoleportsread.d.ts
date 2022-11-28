import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsolePortsReadRequest extends SpeakeasyBase {
    pathParams: DcimConsolePortsReadPathParams;
}
export declare class DcimConsolePortsReadResponse extends SpeakeasyBase {
    consolePort?: shared.ConsolePort;
    contentType: string;
    statusCode: number;
}
