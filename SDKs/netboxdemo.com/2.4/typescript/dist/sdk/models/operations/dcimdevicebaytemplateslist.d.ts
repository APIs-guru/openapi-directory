import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBayTemplatesListQueryParams extends SpeakeasyBase {
    devicetypeId?: string;
    limit?: number;
    name?: string;
    offset?: number;
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
