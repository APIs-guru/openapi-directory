import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutStudiesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PutStudiesIdMetadataNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class PutStudiesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: PutStudiesIdMetadataNamePathParams;
    headers: PutStudiesIdMetadataNameHeaders;
    request?: Uint8Array;
}
export declare class PutStudiesIdMetadataNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
