import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimConsoleServerPortTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimConsoleServerPortTemplatesUpdatePathParams;
    request: shared.WritableConsoleServerPortTemplateInput;
}
export declare class DcimConsoleServerPortTemplatesUpdateResponse extends SpeakeasyBase {
    consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;
    contentType: string;
    statusCode: number;
}
