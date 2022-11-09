import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostToolsExecuteScriptRequest extends SpeakeasyBase {
    request?: Uint8Array;
}
export declare class PostToolsExecuteScriptResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
