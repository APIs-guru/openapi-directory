import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdMetadataNameHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdMetadataNamePathParams;
    headers: GetStudiesIdMetadataNameHeaders;
}
export declare class GetStudiesIdMetadataNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
