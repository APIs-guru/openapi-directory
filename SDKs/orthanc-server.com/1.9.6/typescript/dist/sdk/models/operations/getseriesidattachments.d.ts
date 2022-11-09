import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesIdAttachmentsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsPathParams;
}
export declare class GetSeriesIdAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdAttachments200ApplicationJsonAny?: any;
    statusCode: number;
}
