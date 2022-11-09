import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
    pathParams: GetStudiesIdAttachmentsNameCompressedMd5PathParams;
    headers: GetStudiesIdAttachmentsNameCompressedMd5Headers;
}
export declare class GetStudiesIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
