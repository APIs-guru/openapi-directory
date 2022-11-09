import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTxResponseVinScriptSig extends SpeakeasyBase {
  @Metadata({ data: "json, name=asm" })
  asm?: string;

  @Metadata({ data: "json, name=hex" })
  hex?: string;
}


export class GetTxResponseVin extends SpeakeasyBase {
  @Metadata({ data: "json, name=n" })
  n?: number;

  @Metadata({ data: "json, name=scriptSig" })
  scriptSig?: GetTxResponseVinScriptSig;

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=txid" })
  txid?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;

  @Metadata({ data: "json, name=valueSat" })
  valueSat?: number;

  @Metadata({ data: "json, name=vout" })
  vout?: number;
}


export class GetTxResponseVoutScriptPubKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses" })
  addresses?: string[];

  @Metadata({ data: "json, name=asm" })
  asm?: string;

  @Metadata({ data: "json, name=hex" })
  hex?: string;

  @Metadata({ data: "json, name=reqSigs" })
  reqSigs?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GetTxResponseVout extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockheight" })
  blockheight?: number;

  @Metadata({ data: "json, name=n" })
  n?: number;

  @Metadata({ data: "json, name=scriptPubKey" })
  scriptPubKey?: GetTxResponseVoutScriptPubKey;

  @Metadata({ data: "json, name=used" })
  used?: boolean;

  @Metadata({ data: "json, name=usedBlockheight" })
  usedBlockheight?: number;

  @Metadata({ data: "json, name=usedTxid" })
  usedTxid?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class GetTxResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockhash" })
  blockhash?: string;

  @Metadata({ data: "json, name=blockheight" })
  blockheight?: number;

  @Metadata({ data: "json, name=blocktime" })
  blocktime?: number;

  @Metadata({ data: "json, name=confirmations" })
  confirmations?: number;

  @Metadata({ data: "json, name=fee" })
  fee?: number;

  @Metadata({ data: "json, name=fees" })
  fees?: number;

  @Metadata({ data: "json, name=locktime" })
  locktime?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=totalsent" })
  totalsent?: number;

  @Metadata({ data: "json, name=txid" })
  txid?: string;

  @Metadata({ data: "json, name=valueIn" })
  valueIn?: number;

  @Metadata({ data: "json, name=valueOut" })
  valueOut?: number;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=vin", elemType: shared.GetTxResponseVin })
  vin?: GetTxResponseVin[];

  @Metadata({ data: "json, name=vout", elemType: shared.GetTxResponseVout })
  vout?: GetTxResponseVout[];
}
