import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdAttachmentsNameIsCompressedPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdAttachmentsNameIsCompressedHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdAttachmentsNameIsCompressedRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsNameIsCompressedPathParams;
    headers: GetPatientsIdAttachmentsNameIsCompressedHeaders;
}
export declare class GetPatientsIdAttachmentsNameIsCompressedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
