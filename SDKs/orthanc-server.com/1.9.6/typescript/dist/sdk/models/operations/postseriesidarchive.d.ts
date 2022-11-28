import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSeriesIdArchivePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSeriesIdArchiveRequest extends SpeakeasyBase {
    pathParams: PostSeriesIdArchivePathParams;
    request?: any;
}
export declare class PostSeriesIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    postSeriesIdArchive200ApplicationJsonAny?: any;
    statusCode: number;
}
