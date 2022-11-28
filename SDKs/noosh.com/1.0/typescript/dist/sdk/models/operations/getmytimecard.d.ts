import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMyTimeCardPathParams extends SpeakeasyBase {
    timeCardId: string;
    workgroupId: string;
}
export declare class GetMyTimeCardRequest extends SpeakeasyBase {
    pathParams: GetMyTimeCardPathParams;
}
export declare class GetMyTimeCardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    timeCardDetailVo?: any;
}
