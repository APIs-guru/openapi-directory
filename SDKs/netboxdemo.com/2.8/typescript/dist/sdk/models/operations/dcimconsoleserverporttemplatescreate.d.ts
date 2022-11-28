import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritableConsoleServerPortTemplateInput;
}
export declare class DcimConsoleServerPortTemplatesCreateResponse extends SpeakeasyBase {
    consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;
    contentType: string;
    statusCode: number;
}
