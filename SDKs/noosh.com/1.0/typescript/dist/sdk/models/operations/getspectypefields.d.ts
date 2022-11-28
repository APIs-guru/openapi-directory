import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSpecTypeFieldsPathParams extends SpeakeasyBase {
    specTypeId: string;
    workgroupId: string;
}
export declare class GetSpecTypeFieldsRequest extends SpeakeasyBase {
    pathParams: GetSpecTypeFieldsPathParams;
}
export declare class GetSpecTypeFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    specTypeFieldsListVo?: any;
    statusCode: number;
}
