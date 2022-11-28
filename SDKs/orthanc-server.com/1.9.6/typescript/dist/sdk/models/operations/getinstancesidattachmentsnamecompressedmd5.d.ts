import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
    pathParams: GetInstancesIdAttachmentsNameCompressedMd5PathParams;
    headers: GetInstancesIdAttachmentsNameCompressedMd5Headers;
}
export declare class GetInstancesIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
