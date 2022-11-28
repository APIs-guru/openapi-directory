import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    devicetypeIdN?: string;
    feedLeg?: string;
    feedLegN?: string;
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
export declare class DcimPowerOutletTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerOutletTemplate[];
}
export declare class DcimPowerOutletTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimPowerOutletTemplatesListQueryParams;
}
export declare class DcimPowerOutletTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimPowerOutletTemplatesList200ApplicationJsonObject?: DcimPowerOutletTemplatesList200ApplicationJson;
}
