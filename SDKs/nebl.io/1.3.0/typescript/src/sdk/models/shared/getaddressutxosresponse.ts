import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddressUtxosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=confirmations" })
  confirmations?: number;

  @SpeakeasyMetadata({ data: "json, name=scriptPubKey" })
  scriptPubKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ts" })
  ts?: number;

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid?: string;

  @SpeakeasyMetadata({ data: "json, name=vout" })
  vout?: number;
}
