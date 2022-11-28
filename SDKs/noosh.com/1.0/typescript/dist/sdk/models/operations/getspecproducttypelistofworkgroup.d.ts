import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSpecProductTypeListOfWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetSpecProductTypeListOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetSpecProductTypeListOfWorkgroupPathParams;
}
export declare class GetSpecProductTypeListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    workgroupAttributeListVo?: any;
}
