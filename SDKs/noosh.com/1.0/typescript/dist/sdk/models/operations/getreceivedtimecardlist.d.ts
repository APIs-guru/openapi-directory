import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReceivedTimeCardListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetReceivedTimeCardListRequest extends SpeakeasyBase {
    pathParams: GetReceivedTimeCardListPathParams;
}
export declare class GetReceivedTimeCardListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    timeCardListVo?: any;
}
