import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletsListQueryParams extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    limit?: number;
    name?: string;
    offset?: number;
    tag?: string;
}
export declare class DcimPowerOutletsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerOutlet[];
}
export declare class DcimPowerOutletsListRequest extends SpeakeasyBase {
    queryParams: DcimPowerOutletsListQueryParams;
}
export declare class DcimPowerOutletsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimPowerOutletsList200ApplicationJsonObject?: DcimPowerOutletsList200ApplicationJson;
}
