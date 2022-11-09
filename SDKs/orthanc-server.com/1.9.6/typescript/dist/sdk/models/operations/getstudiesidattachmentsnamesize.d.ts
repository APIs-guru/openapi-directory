import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdAttachmentsNameSizePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdAttachmentsNameSizeHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdAttachmentsNameSizeRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdAttachmentsNameSizePathParams;
    headers: GetStudiesIdAttachmentsNameSizeHeaders;
}
export declare class GetStudiesIdAttachmentsNameSizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
