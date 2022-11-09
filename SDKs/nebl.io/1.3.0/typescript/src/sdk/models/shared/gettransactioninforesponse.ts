import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionInfoResponseVinPreviousOutput extends SpeakeasyBase {
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


export class GetTransactionInfoResponseVinScriptSig extends SpeakeasyBase {
  @Metadata({ data: "json, name=asm" })
  asm?: string;

  @Metadata({ data: "json, name=hex" })
  hex?: string;
}


export class GetTransactionInfoResponseVinTokens extends SpeakeasyBase {
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


export class GetTransactionInfoResponseVin extends SpeakeasyBase {
  @Metadata({ data: "json, name=previousOutput" })
  previousOutput?: GetTransactionInfoResponseVinPreviousOutput;

  @Metadata({ data: "json, name=scriptSig" })
  scriptSig?: GetTransactionInfoResponseVinScriptSig;

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=tokens", elemType: shared.GetTransactionInfoResponseVinTokens })
  tokens?: GetTransactionInfoResponseVinTokens[];

  @Metadata({ data: "json, name=txid" })
  txid?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;

  @Metadata({ data: "json, name=vout" })
  vout?: number;
}


export class GetTransactionInfoResponseVoutScriptPubKey extends SpeakeasyBase {
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


export class GetTransactionInfoResponseVoutTokens extends SpeakeasyBase {
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


export class GetTransactionInfoResponseVout extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockheight" })
  blockheight?: number;

  @Metadata({ data: "json, name=n" })
  n?: number;

  @Metadata({ data: "json, name=scriptPubKey" })
  scriptPubKey?: GetTransactionInfoResponseVoutScriptPubKey;

  @Metadata({ data: "json, name=tokens", elemType: shared.GetTransactionInfoResponseVoutTokens })
  tokens?: GetTransactionInfoResponseVoutTokens[];

  @Metadata({ data: "json, name=used" })
  used?: boolean;

  @Metadata({ data: "json, name=usedBlockheight" })
  usedBlockheight?: number;

  @Metadata({ data: "json, name=usedTxid" })
  usedTxid?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}


export class GetTransactionInfoResponse extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=hex" })
  hex?: string;

  @Metadata({ data: "json, name=locktime" })
  locktime?: number;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=totalsent" })
  totalsent?: number;

  @Metadata({ data: "json, name=txid" })
  txid?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;

  @Metadata({ data: "json, name=vin", elemType: shared.GetTransactionInfoResponseVin })
  vin?: GetTransactionInfoResponseVin[];

  @Metadata({ data: "json, name=vout", elemType: shared.GetTransactionInfoResponseVout })
  vout?: GetTransactionInfoResponseVout[];
}
