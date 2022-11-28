import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProjectStatusPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetProjectStatusRequest extends SpeakeasyBase {
    pathParams: GetProjectStatusPathParams;
}
export declare class GetProjectStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectStatusListVo?: any;
    statusCode: number;
}
