import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams extends SpeakeasyBase {
    specTypeId: string;
    workgroupId: string;
}
export declare class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest extends SpeakeasyBase {
    pathParams: GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsPathParams;
}
export declare class GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    propertyParamListVo?: any;
    statusCode: number;
}
