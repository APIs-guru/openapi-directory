import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWorkgroupListQueryParams extends SpeakeasyBase {
    workgroupName?: string;
    workgroupTypes?: string[];
}
export declare class GetWorkgroupListRequest extends SpeakeasyBase {
    queryParams: GetWorkgroupListQueryParams;
}
export declare class GetWorkgroupListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    workgroupListVo?: any;
}
