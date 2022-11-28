import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PutSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class PutSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: PutSeriesIdAttachmentsNamePathParams;
    headers: PutSeriesIdAttachmentsNameHeaders;
    request?: Uint8Array;
}
export declare class PutSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    putSeriesIdAttachmentsName200ApplicationJsonAny?: any;
    statusCode: number;
}
