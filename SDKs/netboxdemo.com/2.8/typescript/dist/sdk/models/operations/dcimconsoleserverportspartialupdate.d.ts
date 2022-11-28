import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsoleServerPortsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimConsoleServerPortsPartialUpdatePathParams;
    request: shared.WritableConsoleServerPortInput;
}
export declare class DcimConsoleServerPortsPartialUpdateResponse extends SpeakeasyBase {
    consoleServerPort?: shared.ConsoleServerPort;
    contentType: string;
    statusCode: number;
}
