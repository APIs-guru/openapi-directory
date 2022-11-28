import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReceivedTimeCardPathParams extends SpeakeasyBase {
    timeCardId: string;
    workgroupId: string;
}
export declare class GetReceivedTimeCardRequest extends SpeakeasyBase {
    pathParams: GetReceivedTimeCardPathParams;
}
export declare class GetReceivedTimeCardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    timeCardReceivedDetailVo?: any;
}
