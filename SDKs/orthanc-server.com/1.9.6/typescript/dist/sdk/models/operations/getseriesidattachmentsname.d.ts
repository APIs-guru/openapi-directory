import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsNamePathParams;
    headers: GetSeriesIdAttachmentsNameHeaders;
}
export declare class GetSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdAttachmentsName200ApplicationJsonAny?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
