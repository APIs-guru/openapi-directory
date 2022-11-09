import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTokenHoldersResponseHolders extends SpeakeasyBase {
    address?: string;
    amount?: number;
}
export declare class GetTokenHoldersResponse extends SpeakeasyBase {
    aggregationPolicy?: string;
    divibility?: number;
    holders?: GetTokenHoldersResponseHolders[];
    lockStatus?: boolean;
    someUtxo?: string;
    tokenId?: string;
}
