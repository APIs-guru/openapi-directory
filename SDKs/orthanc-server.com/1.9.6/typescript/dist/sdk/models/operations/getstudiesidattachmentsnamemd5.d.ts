import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdAttachmentsNameMd5PathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdAttachmentsNameMd5Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdAttachmentsNameMd5Request extends SpeakeasyBase {
    pathParams: GetStudiesIdAttachmentsNameMd5PathParams;
    headers: GetStudiesIdAttachmentsNameMd5Headers;
}
export declare class GetStudiesIdAttachmentsNameMd5Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
