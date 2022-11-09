import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTxResponseVinScriptSig extends SpeakeasyBase {
    asm?: string;
    hex?: string;
}
export declare class GetTxResponseVin extends SpeakeasyBase {
    n?: number;
    scriptSig?: GetTxResponseVinScriptSig;
    sequence?: number;
    txid?: string;
    value?: number;
    valueSat?: number;
    vout?: number;
}
export declare class GetTxResponseVoutScriptPubKey extends SpeakeasyBase {
    addresses?: string[];
    asm?: string;
    hex?: string;
    reqSigs?: number;
    type?: string;
}
export declare class GetTxResponseVout extends SpeakeasyBase {
    blockheight?: number;
    n?: number;
    scriptPubKey?: GetTxResponseVoutScriptPubKey;
    used?: boolean;
    usedBlockheight?: number;
    usedTxid?: string;
    value?: number;
}
export declare class GetTxResponse extends SpeakeasyBase {
    blockhash?: string;
    blockheight?: number;
    blocktime?: number;
    confirmations?: number;
    fee?: number;
    fees?: number;
    locktime?: number;
    size?: number;
    time?: number;
    totalsent?: number;
    txid?: string;
    valueIn?: number;
    valueOut?: number;
    version?: number;
    vin?: GetTxResponseVin[];
    vout?: GetTxResponseVout[];
}
