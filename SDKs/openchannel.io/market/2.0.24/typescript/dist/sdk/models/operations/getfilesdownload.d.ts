import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetFilesDownloadQueryParams extends SpeakeasyBase {
    fileId: string;
    validSeconds?: number;
}
export declare class GetFilesDownloadRequest extends SpeakeasyBase {
    queryParams: GetFilesDownloadQueryParams;
}
export declare class GetFilesDownloadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
