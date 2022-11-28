import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTransactionInfoResponseVinPreviousOutput extends SpeakeasyBase {
    addresses?: string[];
    asm?: string;
    hex?: string;
    reqSigs?: number;
    type?: string;
}
export declare class GetTransactionInfoResponseVinScriptSig extends SpeakeasyBase {
    asm?: string;
    hex?: string;
}
export declare class GetTransactionInfoResponseVinTokens extends SpeakeasyBase {
    aggregationPolicy?: string;
    amount?: number;
    divisibility?: number;
    issueTxid?: string;
    lockStatus?: boolean;
    tokenId?: string;
}
export declare class GetTransactionInfoResponseVin extends SpeakeasyBase {
    previousOutput?: GetTransactionInfoResponseVinPreviousOutput;
    scriptSig?: GetTransactionInfoResponseVinScriptSig;
    sequence?: number;
    tokens?: GetTransactionInfoResponseVinTokens[];
    txid?: string;
    value?: number;
    vout?: number;
}
export declare class GetTransactionInfoResponseVoutScriptPubKey extends SpeakeasyBase {
    addresses?: string[];
    asm?: string;
    hex?: string;
    reqSigs?: number;
    type?: string;
}
export declare class GetTransactionInfoResponseVoutTokens extends SpeakeasyBase {
    aggregationPolicy?: string;
    amount?: number;
    divisibility?: number;
    issueTxid?: string;
    lockStatus?: boolean;
    tokenId?: string;
}
export declare class GetTransactionInfoResponseVout extends SpeakeasyBase {
    blockheight?: number;
    n?: number;
    scriptPubKey?: GetTransactionInfoResponseVoutScriptPubKey;
    tokens?: GetTransactionInfoResponseVoutTokens[];
    used?: boolean;
    usedBlockheight?: number;
    usedTxid?: string;
    value?: number;
}
export declare class GetTransactionInfoResponse extends SpeakeasyBase {
    blockhash?: string;
    blockheight?: number;
    blocktime?: number;
    confirmations?: number;
    fee?: number;
    hex?: string;
    locktime?: number;
    time?: number;
    totalsent?: number;
    txid?: string;
    version?: number;
    vin?: GetTransactionInfoResponseVin[];
    vout?: GetTransactionInfoResponseVout[];
}
