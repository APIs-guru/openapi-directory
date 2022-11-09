import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RpcRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=jsonrpc" })
  jsonrpc: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=params" })
  params: string[];
}
