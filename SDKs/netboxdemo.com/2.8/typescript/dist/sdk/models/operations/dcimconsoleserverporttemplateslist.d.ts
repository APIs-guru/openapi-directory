import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConsoleServerPortTemplatesListQueryParams extends SpeakeasyBase {
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
