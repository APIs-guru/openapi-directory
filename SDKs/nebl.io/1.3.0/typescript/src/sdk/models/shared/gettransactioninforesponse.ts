import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTransactionInfoResponseVinPreviousOutput extends SpeakeasyBase {
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


export class GetTransactionInfoResponseVinScriptSig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asm" })
  asm?: string;

  @SpeakeasyMetadata({ data: "json, name=hex" })
  hex?: string;
}


export class GetTransactionInfoResponseVinTokens extends SpeakeasyBase {
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


export class GetTransactionInfoResponseVin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=previousOutput" })
  previousOutput?: GetTransactionInfoResponseVinPreviousOutput;

  @SpeakeasyMetadata({ data: "json, name=scriptSig" })
  scriptSig?: GetTransactionInfoResponseVinScriptSig;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: GetTransactionInfoResponseVinTokens })
  tokens?: GetTransactionInfoResponseVinTokens[];

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;

  @SpeakeasyMetadata({ data: "json, name=vout" })
  vout?: number;
}


export class GetTransactionInfoResponseVoutScriptPubKey extends SpeakeasyBase {
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


export class GetTransactionInfoResponseVoutTokens extends SpeakeasyBase {
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


export class GetTransactionInfoResponseVout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockheight" })
  blockheight?: number;

  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=scriptPubKey" })
  scriptPubKey?: GetTransactionInfoResponseVoutScriptPubKey;

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: GetTransactionInfoResponseVoutTokens })
  tokens?: GetTransactionInfoResponseVoutTokens[];

  @SpeakeasyMetadata({ data: "json, name=used" })
  used?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usedBlockheight" })
  usedBlockheight?: number;

  @SpeakeasyMetadata({ data: "json, name=usedTxid" })
  usedTxid?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


export class GetTransactionInfoResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=hex" })
  hex?: string;

  @SpeakeasyMetadata({ data: "json, name=locktime" })
  locktime?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=totalsent" })
  totalsent?: number;

  @SpeakeasyMetadata({ data: "json, name=txid" })
  txid?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=vin", elemType: GetTransactionInfoResponseVin })
  vin?: GetTransactionInfoResponseVin[];

  @SpeakeasyMetadata({ data: "json, name=vout", elemType: GetTransactionInfoResponseVout })
  vout?: GetTransactionInfoResponseVout[];
}
