import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const JsonRpcServerList = [
	"http://127.0.0.1:6326",
	"http://127.0.0.1:16326",
] as const;


export class JsonRpcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  rpcAuth: shared.SchemeRpcAuth;
}


export class JsonRpcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RpcRequest;

  @SpeakeasyMetadata()
  security: JsonRpcSecurity;
}


export class JsonRpcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rpcResponse?: shared.RpcResponse;
}
