import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BroadcastTxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=txHex" })
  txHex: string;
}
