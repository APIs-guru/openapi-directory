import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    limit?: number;
    name?: string;
    offset?: number;
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
