import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsNameCompressedMd5PathParams;
    headers: GetPatientsIdAttachmentsNameCompressedMd5Headers;
}
export declare class GetPatientsIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
