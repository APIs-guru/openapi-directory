import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdAttachmentsNameCompressedDataPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdAttachmentsNameCompressedDataHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdAttachmentsNameCompressedDataRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsNameCompressedDataPathParams;
    headers: GetPatientsIdAttachmentsNameCompressedDataHeaders;
}
export declare class GetPatientsIdAttachmentsNameCompressedDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
