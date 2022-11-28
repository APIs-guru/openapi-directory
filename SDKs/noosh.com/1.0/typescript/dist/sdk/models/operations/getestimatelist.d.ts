import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEstimateListPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetEstimateListRequest extends SpeakeasyBase {
    pathParams: GetEstimateListPathParams;
}
export declare class GetEstimateListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimateListExpandVo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
