import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdAttachmentsNameCompressedSizePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdAttachmentsNameCompressedSizeHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdAttachmentsNameCompressedSizeRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsNameCompressedSizePathParams;
    headers: GetPatientsIdAttachmentsNameCompressedSizeHeaders;
}
export declare class GetPatientsIdAttachmentsNameCompressedSizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
