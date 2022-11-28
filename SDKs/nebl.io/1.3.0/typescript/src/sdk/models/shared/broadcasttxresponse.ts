import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BroadcastTxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid?: string;
}
