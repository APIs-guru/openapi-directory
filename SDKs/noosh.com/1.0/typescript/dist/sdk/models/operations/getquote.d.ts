import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuotePathParams extends SpeakeasyBase {
    projectId: string;
    quoteId: string;
    workgroupId: string;
}
export declare class GetQuoteRequest extends SpeakeasyBase {
    pathParams: GetQuotePathParams;
}
export declare class GetQuoteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    quoteExpandVo?: any;
    statusCode: number;
}
