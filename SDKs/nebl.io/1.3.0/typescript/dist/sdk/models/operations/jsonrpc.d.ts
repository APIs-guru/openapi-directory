import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const JSONRPC_SERVERS: string[];
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
