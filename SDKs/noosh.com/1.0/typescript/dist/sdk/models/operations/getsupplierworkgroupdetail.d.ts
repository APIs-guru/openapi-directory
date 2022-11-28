import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSupplierWorkgroupDetailPathParams extends SpeakeasyBase {
    buSupplierWorkgroupId: string;
    workgroupId: string;
}
export declare class GetSupplierWorkgroupDetailRequest extends SpeakeasyBase {
    pathParams: GetSupplierWorkgroupDetailPathParams;
}
export declare class GetSupplierWorkgroupDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    supplierWorkgroupExpandVo?: any;
}
