import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEstimatePathParams extends SpeakeasyBase {
    estimateId: string;
    projectId: string;
    workgroupId: string;
}
export declare class GetEstimateRequest extends SpeakeasyBase {
    pathParams: GetEstimatePathParams;
}
export declare class GetEstimateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimateExpandVo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
