import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing flags that potentialy modify this transaction
**/
export declare class SendTokenRequestFlags extends SpeakeasyBase {
    splitChange?: boolean;
}
export declare class SendTokenRequestMetadataEncryptions extends SpeakeasyBase {
    format?: string;
    key?: string;
    pubkey?: string;
    type?: string;
}
/**
 * Object describing expiration rules of the token
**/
export declare class SendTokenRequestMetadataRulesExpiration extends SpeakeasyBase {
    locked?: boolean;
    validUntil?: number;
}
export declare class SendTokenRequestMetadataRulesFeesItems extends SpeakeasyBase {
    address?: string;
    tokenId?: string;
    value?: string;
}
export declare class SendTokenRequestMetadataRulesFees extends SpeakeasyBase {
    items?: SendTokenRequestMetadataRulesFeesItems[];
    locked?: boolean;
}
export declare class SendTokenRequestMetadataRulesHolders extends SpeakeasyBase {
    address?: string;
    locked?: boolean;
}
/**
 * Object describing token rules
**/
export declare class SendTokenRequestMetadataRules extends SpeakeasyBase {
    expiration?: SendTokenRequestMetadataRulesExpiration;
    fees?: SendTokenRequestMetadataRulesFees;
    holders?: SendTokenRequestMetadataRulesHolders[];
}
export declare class SendTokenRequestMetadataUrls extends SpeakeasyBase {
    dataHash?: string;
    mimeType?: string;
    name?: string;
    url?: string;
}
export declare class SendTokenRequestMetadataUserDataMeta extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Metadata set by user on token
**/
export declare class SendTokenRequestMetadataUserData extends SpeakeasyBase {
    meta?: SendTokenRequestMetadataUserDataMeta[];
}
/**
 * Object representing all metadata at token issuance
**/
export declare class SendTokenRequestMetadata extends SpeakeasyBase {
    description?: string;
    encryptions?: SendTokenRequestMetadataEncryptions[];
    issuer?: string;
    rules?: SendTokenRequestMetadataRules;
    tokenName?: string;
    urls?: SendTokenRequestMetadataUrls[];
    userData?: SendTokenRequestMetadataUserData;
}
export declare class SendTokenRequestTo extends SpeakeasyBase {
    address?: string;
    amount?: number;
    tokenId?: string;
}
export declare class SendTokenRequest extends SpeakeasyBase {
    fee: number;
    flags?: SendTokenRequestFlags;
    from?: string[];
    metadata?: SendTokenRequestMetadata;
    sendutxo?: string[];
    to: SendTokenRequestTo[];
}
