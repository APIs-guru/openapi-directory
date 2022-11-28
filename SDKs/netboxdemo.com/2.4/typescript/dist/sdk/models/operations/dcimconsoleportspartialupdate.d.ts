import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsolePortsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimConsolePortsPartialUpdatePathParams;
    request: shared.WritableConsolePortInput;
}
export declare class DcimConsolePortsPartialUpdateResponse extends SpeakeasyBase {
    consolePort?: shared.ConsolePort;
    contentType: string;
    statusCode: number;
}
