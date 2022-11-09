import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddressUtxosResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=confirmations" })
  confirmations?: number;

  @Metadata({ data: "json, name=scriptPubKey" })
  scriptPubKey?: string;

  @Metadata({ data: "json, name=ts" })
  ts?: number;

  @Metadata({ data: "json, name=txid" })
  txid?: string;

  @Metadata({ data: "json, name=vout" })
  vout?: number;
}
