import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdAttachmentsNameSizePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdAttachmentsNameSizeHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdAttachmentsNameSizeRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsNameSizePathParams;
    headers: GetPatientsIdAttachmentsNameSizeHeaders;
}
export declare class GetPatientsIdAttachmentsNameSizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
