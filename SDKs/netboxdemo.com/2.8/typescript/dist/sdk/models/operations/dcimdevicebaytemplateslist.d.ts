import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBayTemplatesListQueryParams extends SpeakeasyBase {
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
}
export declare class DcimDeviceBayTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceBayTemplate[];
}
export declare class DcimDeviceBayTemplatesListRequest extends SpeakeasyBase {
    queryParams: DcimDeviceBayTemplatesListQueryParams;
}
export declare class DcimDeviceBayTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimDeviceBayTemplatesList200ApplicationJsonObject?: DcimDeviceBayTemplatesList200ApplicationJson;
}
