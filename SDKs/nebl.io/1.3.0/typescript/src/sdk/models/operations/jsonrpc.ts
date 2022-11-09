import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const JSONRPC_SERVERS = [
	"http://127.0.0.1:6326",
	"http://127.0.0.1:16326",
];



export class JsonRpcSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  rpcAuth: shared.SchemeRpcAuth;
}


export class JsonRpcRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RpcRequest;

  @Metadata()
  security: JsonRpcSecurity;
}


export class JsonRpcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  rpcResponse?: shared.RpcResponse;
}
