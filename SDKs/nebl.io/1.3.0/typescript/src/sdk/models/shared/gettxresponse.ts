import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTxResponseVinScriptSig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asm" })
  asm?: string;

  @SpeakeasyMetadata({ data: "json, name=hex" })
  hex?: string;
}


export class GetTxResponseVin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=scriptSig" })
  scriptSig?: GetTxResponseVinScriptSig;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;

  @SpeakeasyMetadata({ data: "json, name=valueSat" })
  valueSat?: number;

  @SpeakeasyMetadata({ data: "json, name=vout" })
  vout?: number;
}


export class GetTxResponseVoutScriptPubKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses" })
  addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=asm" })
  asm?: string;

  @SpeakeasyMetadata({ data: "json, name=hex" })
  hex?: string;

  @SpeakeasyMetadata({ data: "json, name=reqSigs" })
  reqSigs?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GetTxResponseVout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockheight" })
  blockheight?: number;

  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=scriptPubKey" })
  scriptPubKey?: GetTxResponseVoutScriptPubKey;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usedBlockheight" })
  usedBlockheight?: number;

  @SpeakeasyMetadata({ data: "json, name=usedTxid" })
  usedTxid?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


export class GetTxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockhash" })
  blockhash?: string;

  @SpeakeasyMetadata({ data: "json, name=blockheight" })
  blockheight?: number;

  @SpeakeasyMetadata({ data: "json, name=blocktime" })
  blocktime?: number;

  @SpeakeasyMetadata({ data: "json, name=confirmations" })
  confirmations?: number;

  @SpeakeasyMetadata({ data: "json, name=fee" })
  fee?: number;

  @SpeakeasyMetadata({ data: "json, name=fees" })
  fees?: number;

  @SpeakeasyMetadata({ data: "json, name=locktime" })
  locktime?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=totalsent" })
  totalsent?: number;

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid?: string;

  @SpeakeasyMetadata({ data: "json, name=valueIn" })
  valueIn?: number;

  @SpeakeasyMetadata({ data: "json, name=valueOut" })
  valueOut?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=vin", elemType: GetTxResponseVin })
  vin?: GetTxResponseVin[];

  @SpeakeasyMetadata({ data: "json, name=vout", elemType: GetTxResponseVout })
  vout?: GetTxResponseVout[];
}
