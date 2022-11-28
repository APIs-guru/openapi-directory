import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAddressInfoResponseUtxosTokens extends SpeakeasyBase {
    aggregationPolicy?: string;
    amount?: number;
    divisibility?: number;
    issueTxid?: string;
    lockStatus?: boolean;
    tokenId?: string;
}
export declare class GetAddressInfoResponseUtxos extends SpeakeasyBase {
    blockheight?: number;
    blocktime?: number;
    index?: number;
    scriptPubKey?: Map<string, any>;
    tokens?: GetAddressInfoResponseUtxosTokens[];
    txid?: string;
    used?: boolean;
    value?: number;
}
export declare class GetAddressInfoResponse extends SpeakeasyBase {
    address?: string;
    utxos?: GetAddressInfoResponseUtxos[];
}
