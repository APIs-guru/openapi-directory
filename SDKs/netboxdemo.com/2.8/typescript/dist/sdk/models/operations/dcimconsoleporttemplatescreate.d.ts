import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritableConsolePortTemplateInput;
}
export declare class DcimConsolePortTemplatesCreateResponse extends SpeakeasyBase {
    consolePortTemplate?: shared.ConsolePortTemplate;
    contentType: string;
    statusCode: number;
}
