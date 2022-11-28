import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRfqPathParams extends SpeakeasyBase {
    projectId: string;
    rfqId: string;
    workgroupId: string;
}
export declare class GetRfqRequest extends SpeakeasyBase {
    pathParams: GetRfqPathParams;
}
export declare class GetRfqResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    rfqExpandVo?: any;
    statusCode: number;
}
