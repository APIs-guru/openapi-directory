import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class DcimConsoleServerPortTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConsoleServerPortTemplate[];
}
export declare class DcimConsoleServerPortTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimConsoleServerPortTemplatesListQueryParams;
}
export declare class DcimConsoleServerPortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimConsoleServerPortTemplatesList200ApplicationJsonObject?: DcimConsoleServerPortTemplatesList200ApplicationJson;
}
