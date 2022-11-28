import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMyTimeCardListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetMyTimeCardListRequest extends SpeakeasyBase {
    pathParams: GetMyTimeCardListPathParams;
}
export declare class GetMyTimeCardListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    timeCardListVo?: any;
}
