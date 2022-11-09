import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdAttachmentsNameIsCompressedPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdAttachmentsNameIsCompressedHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdAttachmentsNameIsCompressedRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdAttachmentsNameIsCompressedPathParams;
    headers: GetInstancesIdAttachmentsNameIsCompressedHeaders;
}
export declare class GetInstancesIdAttachmentsNameIsCompressedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
