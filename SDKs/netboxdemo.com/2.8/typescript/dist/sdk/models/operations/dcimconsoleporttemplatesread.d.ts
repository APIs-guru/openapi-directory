import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsolePortTemplatesReadRequest extends SpeakeasyBase {
    pathParams: DcimConsolePortTemplatesReadPathParams;
}
export declare class DcimConsolePortTemplatesReadResponse extends SpeakeasyBase {
    consolePortTemplate?: shared.ConsolePortTemplate;
    contentType: string;
    statusCode: number;
}
