import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortTemplatesListQueryParams extends SpeakeasyBase {
    allocatedDraw?: string;
    allocatedDrawGt?: string;
    allocatedDrawGte?: string;
    allocatedDrawLt?: string;
    allocatedDrawLte?: string;
    allocatedDrawN?: string;
    devicetypeId?: string;
    devicetypeIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    maximumDraw?: string;
    maximumDrawGt?: string;
    maximumDrawGte?: string;
    maximumDrawLt?: string;
    maximumDrawLte?: string;
    maximumDrawN?: string;
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
export declare class DcimPowerPortTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerPortTemplate[];
}
export declare class DcimPowerPortTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimPowerPortTemplatesListQueryParams;
}
export declare class DcimPowerPortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimPowerPortTemplatesList200ApplicationJsonObject?: DcimPowerPortTemplatesList200ApplicationJson;
}
