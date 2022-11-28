import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSupplierWorkgroupListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetSupplierWorkgroupListRequest extends SpeakeasyBase {
    pathParams: GetSupplierWorkgroupListPathParams;
}
export declare class GetSupplierWorkgroupListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    supplierWorkgroupListVo?: any;
}
