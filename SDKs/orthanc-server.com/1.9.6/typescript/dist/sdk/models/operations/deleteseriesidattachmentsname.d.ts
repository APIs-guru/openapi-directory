import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class DeleteSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: DeleteSeriesIdAttachmentsNamePathParams;
    headers: DeleteSeriesIdAttachmentsNameHeaders;
}
export declare class DeleteSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
