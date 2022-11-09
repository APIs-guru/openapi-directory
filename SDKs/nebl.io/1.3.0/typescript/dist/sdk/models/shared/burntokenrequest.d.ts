import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class BurnTokenRequestBurn extends SpeakeasyBase {
    amount?: number;
    tokenId?: string;
}
export declare class BurnTokenRequestTransfer extends SpeakeasyBase {
    address?: string;
    amount?: number;
    tokenId?: string;
}
export declare class BurnTokenRequest extends SpeakeasyBase {
    burn: BurnTokenRequestBurn[];
    fee: number;
    from?: string[];
    transfer?: BurnTokenRequestTransfer[];
}
