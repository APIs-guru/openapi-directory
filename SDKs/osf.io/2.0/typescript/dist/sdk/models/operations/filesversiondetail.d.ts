import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilesVersionDetailPathParams extends SpeakeasyBase {
    fileId: string;
    versionId: string;
}
export declare class FilesVersionDetailRequest extends SpeakeasyBase {
    pathParams: FilesVersionDetailPathParams;
}
export declare class FilesVersionDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
