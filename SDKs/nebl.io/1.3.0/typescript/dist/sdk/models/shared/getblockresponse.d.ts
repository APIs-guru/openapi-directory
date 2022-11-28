import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBlockResponse extends SpeakeasyBase {
    bits?: string;
    confirmations?: number;
    difficulty?: number;
    hash?: string;
    height?: number;
    merkleroot?: string;
    nextblockhash?: string;
    nonce?: number;
    previousblockhash?: string;
    reward?: number;
    size?: number;
    time?: number;
    tx?: string[];
    version?: number;
}
