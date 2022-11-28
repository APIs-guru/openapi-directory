import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortsTracePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsoleServerPortsTraceRequest extends SpeakeasyBase {
    pathParams: DcimConsoleServerPortsTracePathParams;
}
export declare class DcimConsoleServerPortsTraceResponse extends SpeakeasyBase {
    consoleServerPort?: shared.ConsoleServerPort;
    contentType: string;
    statusCode: number;
}
