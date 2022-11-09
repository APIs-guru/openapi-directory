import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdAttachmentsNameCompressedSizePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdAttachmentsNameCompressedSizeHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdAttachmentsNameCompressedSizeRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdAttachmentsNameCompressedSizePathParams;
    headers: GetInstancesIdAttachmentsNameCompressedSizeHeaders;
}
export declare class GetInstancesIdAttachmentsNameCompressedSizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
