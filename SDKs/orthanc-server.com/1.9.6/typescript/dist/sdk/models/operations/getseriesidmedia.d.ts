import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdMediaQueryParams extends SpeakeasyBase {
    extended?: string;
    transcode?: string;
}
export declare class GetSeriesIdMediaRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdMediaPathParams;
    queryParams: GetSeriesIdMediaQueryParams;
}
export declare class GetSeriesIdMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
