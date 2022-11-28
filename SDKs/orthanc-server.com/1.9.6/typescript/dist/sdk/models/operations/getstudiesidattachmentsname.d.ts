import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetStudiesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStudiesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdAttachmentsNamePathParams;
    headers: GetStudiesIdAttachmentsNameHeaders;
}
export declare class GetStudiesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdAttachmentsName200ApplicationJsonAny?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
