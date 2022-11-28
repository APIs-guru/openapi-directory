import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    devicetypeIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    mgmtOnly?: string;
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
export declare class DcimInterfaceTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.InterfaceTemplate[];
}
export declare class DcimInterfaceTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimInterfaceTemplatesListQueryParams;
}
export declare class DcimInterfaceTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimInterfaceTemplatesList200ApplicationJsonObject?: DcimInterfaceTemplatesList200ApplicationJson;
}
