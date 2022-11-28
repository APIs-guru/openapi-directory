import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAddressUtxosResponse extends SpeakeasyBase {
    address?: string;
    amount?: number;
    confirmations?: number;
    scriptPubKey?: string;
    ts?: number;
    txid?: string;
    vout?: number;
}
