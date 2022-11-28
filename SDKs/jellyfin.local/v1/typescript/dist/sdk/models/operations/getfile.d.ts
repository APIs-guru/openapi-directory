import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilePathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetFileSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetFileRequest extends SpeakeasyBase {
    pathParams: GetFilePathParams;
    security: GetFileSecurity;
}
export declare class GetFileResponse extends SpeakeasyBase {
    contentType: string;
    getFile200AudioWildcardBinaryString?: Uint8Array;
    getFile200VideoWildcardBinaryString?: Uint8Array;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
