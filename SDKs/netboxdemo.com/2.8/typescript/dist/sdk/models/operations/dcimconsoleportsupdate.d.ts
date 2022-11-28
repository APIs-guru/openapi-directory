import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsolePortsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimConsolePortsUpdatePathParams;
    request: shared.WritableConsolePortInput;
}
export declare class DcimConsolePortsUpdateResponse extends SpeakeasyBase {
    consolePort?: shared.ConsolePort;
    contentType: string;
    statusCode: number;
}
