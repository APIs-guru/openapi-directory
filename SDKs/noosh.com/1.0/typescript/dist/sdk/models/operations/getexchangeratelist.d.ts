import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetExchangeRateListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetExchangeRateListRequest extends SpeakeasyBase {
    pathParams: GetExchangeRateListPathParams;
}
export declare class GetExchangeRateListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    multiExchangeRateListVo?: any;
    statusCode: number;
}
