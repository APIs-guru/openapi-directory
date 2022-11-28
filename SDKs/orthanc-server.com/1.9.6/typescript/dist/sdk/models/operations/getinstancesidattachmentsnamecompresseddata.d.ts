import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdAttachmentsNameCompressedDataPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdAttachmentsNameCompressedDataHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdAttachmentsNameCompressedDataRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdAttachmentsNameCompressedDataPathParams;
    headers: GetInstancesIdAttachmentsNameCompressedDataHeaders;
}
export declare class GetInstancesIdAttachmentsNameCompressedDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
