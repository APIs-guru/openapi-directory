import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsolePortTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimConsolePortTemplatesUpdatePathParams;
    request: shared.WritableConsolePortTemplateInput;
}
export declare class DcimConsolePortTemplatesUpdateResponse extends SpeakeasyBase {
    consolePortTemplate?: shared.ConsolePortTemplate;
    contentType: string;
    statusCode: number;
}
