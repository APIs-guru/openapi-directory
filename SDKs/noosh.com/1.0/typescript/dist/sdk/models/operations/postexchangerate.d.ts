import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostExchangeRatePathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class PostExchangeRateRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    multiExchangeRatePersistListVo?: any;
    multiExchangeRatePersistListVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostExchangeRateRequest extends SpeakeasyBase {
    pathParams: PostExchangeRatePathParams;
    request?: PostExchangeRateRequests;
}
export declare class PostExchangeRateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatus?: any;
    httpStatusVo?: any;
    statusCode: number;
}
