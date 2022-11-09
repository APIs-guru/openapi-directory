import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UploadsCreateRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadsCreateRequestBody extends SpeakeasyBase {
    file: UploadsCreateRequestBodyFile;
}
export declare class UploadsCreateRequest extends SpeakeasyBase {
    request: UploadsCreateRequestBody;
}
export declare class UploadsCreateResponse extends SpeakeasyBase {
    contentType: string;
    fileResponse?: shared.FileResponse;
    statusCode: number;
}
