import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortTemplatesListQueryParams extends SpeakeasyBase {
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
    positions?: string;
    positionsGt?: string;
    positionsGte?: string;
    positionsLt?: string;
    positionsLte?: string;
    positionsN?: string;
    q?: string;
    type?: string;
    typeN?: string;
}
export declare class DcimRearPortTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.RearPortTemplate[];
}
export declare class DcimRearPortTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimRearPortTemplatesListQueryParams;
}
export declare class DcimRearPortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimRearPortTemplatesList200ApplicationJsonObject?: DcimRearPortTemplatesList200ApplicationJson;
}
