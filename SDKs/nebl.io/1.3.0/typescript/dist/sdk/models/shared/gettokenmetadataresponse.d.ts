import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Metadata set by user on token
**/
export declare class GetTokenMetadataResponseMetadataOfIssuanceDataUserData extends SpeakeasyBase {
    meta?: GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta[];
}
export declare class GetTokenMetadataResponseMetadataOfIssuanceData extends SpeakeasyBase {
    description?: string;
    issuer?: string;
    tokenName?: string;
    userData?: GetTokenMetadataResponseMetadataOfIssuanceDataUserData;
}
/**
 * Metadata set at issuance
**/
export declare class GetTokenMetadataResponseMetadataOfIssuance extends SpeakeasyBase {
    data?: GetTokenMetadataResponseMetadataOfIssuanceData;
}
/**
 * Metadata set by user on token for UTXO
**/
export declare class GetTokenMetadataResponseMetadataOfUtxoUserData extends SpeakeasyBase {
    meta?: Map<string, any>[];
}
/**
 * Metadata set for UTXO
**/
export declare class GetTokenMetadataResponseMetadataOfUtxo extends SpeakeasyBase {
    userData?: GetTokenMetadataResponseMetadataOfUtxoUserData;
}
export declare class GetTokenMetadataResponse extends SpeakeasyBase {
    aggregationPolicy?: string;
    divisibility?: number;
    firstBlock?: number;
    initialIssuanceAmount?: number;
    issuanceTxid?: string;
    issueAddress?: string;
    lockStatus?: boolean;
    metadataOfIssuance?: GetTokenMetadataResponseMetadataOfIssuance;
    metadataOfUtxo?: GetTokenMetadataResponseMetadataOfUtxo;
    numOfBurns?: number;
    numOfHolders?: number;
    numOfIssuance?: number;
    numOfTransfers?: number;
    someUtxo?: string;
    tokenId?: string;
    totalSupply?: number;
}
