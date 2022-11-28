import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilesPatchPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class FilesPatchRequest extends SpeakeasyBase {
    pathParams: FilesPatchPathParams;
    request: Map<string, any>;
}
export declare class FilesPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
