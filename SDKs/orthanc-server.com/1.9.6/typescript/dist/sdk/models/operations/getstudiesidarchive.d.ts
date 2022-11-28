import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdArchivePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdArchiveQueryParams extends SpeakeasyBase {
    transcode?: string;
}
export declare class GetStudiesIdArchiveRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdArchivePathParams;
    queryParams: GetStudiesIdArchiveQueryParams;
}
export declare class GetStudiesIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
