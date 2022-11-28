import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsolePortTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    devicetypeIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    offset?: number;
    q?: string;
    type?: string;
    typeN?: string;
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
