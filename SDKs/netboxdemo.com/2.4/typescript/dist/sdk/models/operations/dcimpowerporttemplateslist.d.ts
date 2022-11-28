import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    limit?: number;
    name?: string;
    offset?: number;
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
