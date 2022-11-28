import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBaysListQueryParams extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    limit?: number;
    name?: string;
    offset?: number;
    tag?: string;
}
export declare class DcimDeviceBaysList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceBay[];
}
export declare class DcimDeviceBaysListRequest extends SpeakeasyBase {
    queryParams: DcimDeviceBaysListQueryParams;
}
export declare class DcimDeviceBaysListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimDeviceBaysList200ApplicationJsonObject?: DcimDeviceBaysList200ApplicationJson;
}
