import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const JsonRpcServerList: readonly ["http://127.0.0.1:6326", "http://127.0.0.1:16326"];
export declare class JsonRpcSecurity extends SpeakeasyBase {
    rpcAuth: shared.SchemeRpcAuth;
}
export declare class JsonRpcRequest extends SpeakeasyBase {
    serverUrl?: string;
    request: shared.RpcRequest;
    security: JsonRpcSecurity;
}
export declare class JsonRpcResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    rpcResponse?: shared.RpcResponse;
}
