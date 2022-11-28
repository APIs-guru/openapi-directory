import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSpecListPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetSpecListRequest extends SpeakeasyBase {
    pathParams: GetSpecListPathParams;
}
export declare class GetSpecListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    specListVo?: any;
    statusCode: number;
}
