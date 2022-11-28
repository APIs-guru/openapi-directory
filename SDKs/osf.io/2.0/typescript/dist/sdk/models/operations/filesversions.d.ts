import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilesVersionsPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class FilesVersionsRequest extends SpeakeasyBase {
    pathParams: FilesVersionsPathParams;
}
export declare class FilesVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
