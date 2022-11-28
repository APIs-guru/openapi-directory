import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsoleServerPortsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimConsoleServerPortsUpdatePathParams;
    request: shared.WritableConsoleServerPortInput;
}
export declare class DcimConsoleServerPortsUpdateResponse extends SpeakeasyBase {
    consoleServerPort?: shared.ConsoleServerPort;
    contentType: string;
    statusCode: number;
}
