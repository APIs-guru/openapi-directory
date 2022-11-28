import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortsTracePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsolePortsTraceRequest extends SpeakeasyBase {
    pathParams: DcimConsolePortsTracePathParams;
}
export declare class DcimConsolePortsTraceResponse extends SpeakeasyBase {
    consolePort?: shared.ConsolePort;
    contentType: string;
    statusCode: number;
}
