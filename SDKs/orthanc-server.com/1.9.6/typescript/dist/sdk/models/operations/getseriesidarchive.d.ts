import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSeriesIdArchivePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdArchiveQueryParams extends SpeakeasyBase {
    transcode?: string;
}
export declare class GetSeriesIdArchiveRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdArchivePathParams;
    queryParams: GetSeriesIdArchiveQueryParams;
}
export declare class GetSeriesIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
