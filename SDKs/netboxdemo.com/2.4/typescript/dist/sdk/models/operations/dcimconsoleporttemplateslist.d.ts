import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class DcimConsolePortTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConsolePortTemplate[];
}
export declare class DcimConsolePortTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimConsolePortTemplatesListQueryParams;
}
export declare class DcimConsolePortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimConsolePortTemplatesList200ApplicationJsonObject?: DcimConsolePortTemplatesList200ApplicationJson;
}
