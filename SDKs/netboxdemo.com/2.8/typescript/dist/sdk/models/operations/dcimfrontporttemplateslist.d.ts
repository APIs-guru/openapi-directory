import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortTemplatesListQueryParams extends SpeakeasyBase {
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
export declare class DcimFrontPortTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.FrontPortTemplate[];
}
export declare class DcimFrontPortTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimFrontPortTemplatesListQueryParams;
}
export declare class DcimFrontPortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimFrontPortTemplatesList200ApplicationJsonObject?: DcimFrontPortTemplatesList200ApplicationJson;
}
