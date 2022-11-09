import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdAttachmentsNameDataPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdAttachmentsNameDataHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdAttachmentsNameDataRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdAttachmentsNameDataPathParams;
    headers: GetStudiesIdAttachmentsNameDataHeaders;
}
export declare class GetStudiesIdAttachmentsNameDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
