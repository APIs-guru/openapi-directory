import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RpcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=jsonrpc" })
  jsonrpc: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params: string[];
}
