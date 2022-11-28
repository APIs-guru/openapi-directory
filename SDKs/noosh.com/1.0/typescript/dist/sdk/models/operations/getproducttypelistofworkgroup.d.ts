import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductTypeListOfWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetProductTypeListOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetProductTypeListOfWorkgroupPathParams;
}
export declare class GetProductTypeListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    workgroupAttributeListVo?: any;
}
