import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRfePathParams extends SpeakeasyBase {
    projectId: string;
    rfeId: string;
    workgroupId: string;
}
export declare class GetRfeRequest extends SpeakeasyBase {
    pathParams: GetRfePathParams;
}
export declare class GetRfeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    rfeExpandVo?: any;
    statusCode: number;
}
