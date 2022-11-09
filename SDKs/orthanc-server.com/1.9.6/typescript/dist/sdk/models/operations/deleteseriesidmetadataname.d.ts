import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteSeriesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class DeleteSeriesIdMetadataNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteSeriesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: DeleteSeriesIdMetadataNamePathParams;
    headers: DeleteSeriesIdMetadataNameHeaders;
}
export declare class DeleteSeriesIdMetadataNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
