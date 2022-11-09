import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BroadcastTxResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=txid" })
  txid?: string;
}
