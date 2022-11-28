import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilesDetailPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class FilesDetailRequest extends SpeakeasyBase {
    pathParams: FilesDetailPathParams;
}
export declare class FilesDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
