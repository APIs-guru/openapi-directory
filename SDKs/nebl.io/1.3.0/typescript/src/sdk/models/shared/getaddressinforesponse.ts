import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddressInfoResponseUtxosTokens extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationPolicy" })
  aggregationPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=divisibility" })
  divisibility?: number;

  @SpeakeasyMetadata({ data: "json, name=issueTxid" })
  issueTxid?: string;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;
}


export class GetAddressInfoResponseUtxos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockheight" })
  blockheight?: number;

  @SpeakeasyMetadata({ data: "json, name=blocktime" })
  blocktime?: number;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=scriptPubKey" })
  scriptPubKey?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: GetAddressInfoResponseUtxosTokens })
  tokens?: GetAddressInfoResponseUtxosTokens[];

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid?: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


export class GetAddressInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=utxos", elemType: GetAddressInfoResponseUtxos })
  utxos?: GetAddressInfoResponseUtxos[];
}
