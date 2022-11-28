import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFilesByIdOrUrlQueryParams extends SpeakeasyBase {
    fileIdOrUrl: string;
}
export declare class GetFilesByIdOrUrlRequest extends SpeakeasyBase {
    queryParams: GetFilesByIdOrUrlQueryParams;
}
export declare class GetFilesByIdOrUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
