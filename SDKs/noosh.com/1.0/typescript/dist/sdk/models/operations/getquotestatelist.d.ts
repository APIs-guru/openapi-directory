import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQuoteStateListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetQuoteStateListRequest extends SpeakeasyBase {
    pathParams: GetQuoteStateListPathParams;
}
export declare class GetQuoteStateListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    objectStateListVo?: any;
    statusCode: number;
}
