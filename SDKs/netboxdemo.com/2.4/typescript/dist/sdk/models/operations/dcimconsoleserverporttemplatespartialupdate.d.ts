import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsoleServerPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimConsoleServerPortTemplatesPartialUpdatePathParams;
    request: shared.WritableConsoleServerPortTemplateInput;
}
export declare class DcimConsoleServerPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
    consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;
    contentType: string;
    statusCode: number;
}
