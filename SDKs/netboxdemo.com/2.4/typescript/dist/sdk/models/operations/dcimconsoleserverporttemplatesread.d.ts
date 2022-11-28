import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsoleServerPortTemplatesReadRequest extends SpeakeasyBase {
    pathParams: DcimConsoleServerPortTemplatesReadPathParams;
}
export declare class DcimConsoleServerPortTemplatesReadResponse extends SpeakeasyBase {
    consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;
    contentType: string;
    statusCode: number;
}
