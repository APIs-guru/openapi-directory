import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesIdMetadataPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdMetadataQueryParams extends SpeakeasyBase {
    expand?: string;
}
export declare class GetSeriesIdMetadataRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdMetadataPathParams;
    queryParams: GetSeriesIdMetadataQueryParams;
}
export declare class GetSeriesIdMetadataResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdMetadata200ApplicationJsonAny?: any;
    statusCode: number;
}
