import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutStudiesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PutStudiesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class PutStudiesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: PutStudiesIdAttachmentsNamePathParams;
    headers: PutStudiesIdAttachmentsNameHeaders;
    request?: Uint8Array;
}
export declare class PutStudiesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    putStudiesIdAttachmentsName200ApplicationJsonAny?: any;
    statusCode: number;
}
