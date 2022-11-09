import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAddressInfoResponseUtxosTokens extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationPolicy" })
  aggregationPolicy?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=divisibility" })
  divisibility?: number;

  @Metadata({ data: "json, name=issueTxid" })
  issueTxid?: string;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;
}


export class GetAddressInfoResponseUtxos extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockheight" })
  blockheight?: number;

  @Metadata({ data: "json, name=blocktime" })
  blocktime?: number;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=scriptPubKey" })
  scriptPubKey?: Map<string, any>;

  @Metadata({ data: "json, name=tokens", elemType: shared.GetAddressInfoResponseUtxosTokens })
  tokens?: GetAddressInfoResponseUtxosTokens[];

  @Metadata({ data: "json, name=txid" })
  txid?: string;

  @Metadata({ data: "json, name=used" })
  used?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class GetAddressInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=utxos", elemType: shared.GetAddressInfoResponseUtxos })
  utxos?: GetAddressInfoResponseUtxos[];
}
