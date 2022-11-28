import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimCablesListQueryParams extends SpeakeasyBase {
    color?: string;
    colorN?: string;
    device?: string;
    deviceId?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    label?: string;
    labelIc?: string;
    labelIe?: string;
    labelIew?: string;
    labelIsw?: string;
    labelN?: string;
    labelNic?: string;
    labelNie?: string;
    labelNiew?: string;
    labelNisw?: string;
    length?: string;
    lengthGt?: string;
    lengthGte?: string;
    lengthLt?: string;
    lengthLte?: string;
    lengthN?: string;
    lengthUnit?: string;
    lengthUnitN?: string;
    limit?: number;
    offset?: number;
    q?: string;
    rack?: string;
    rackId?: string;
    site?: string;
    siteId?: string;
    status?: string;
    statusN?: string;
    tenant?: string;
    tenantId?: string;
    type?: string;
    typeN?: string;
}
export declare class DcimCablesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Cable[];
}
export declare class DcimCablesListRequest extends SpeakeasyBase {
    queryParams: DcimCablesListQueryParams;
}
export declare class DcimCablesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimCablesList200ApplicationJsonObject?: DcimCablesList200ApplicationJson;
}
