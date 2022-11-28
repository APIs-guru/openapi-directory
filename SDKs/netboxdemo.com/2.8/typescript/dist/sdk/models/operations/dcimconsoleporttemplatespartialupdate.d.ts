import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsolePortTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimConsolePortTemplatesPartialUpdatePathParams;
    request: shared.WritableConsolePortTemplateInput;
}
export declare class DcimConsolePortTemplatesPartialUpdateResponse extends SpeakeasyBase {
    consolePortTemplate?: shared.ConsolePortTemplate;
    contentType: string;
    statusCode: number;
}
