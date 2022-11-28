import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDownloadPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetDownloadSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDownloadRequest extends SpeakeasyBase {
    pathParams: GetDownloadPathParams;
    security: GetDownloadSecurity;
}
export declare class GetDownloadResponse extends SpeakeasyBase {
    contentType: string;
    getDownload200AudioWildcardBinaryString?: Uint8Array;
    getDownload200VideoWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
