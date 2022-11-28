import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object representing flags that potentialy modify this transaction
**/
export declare class IssueTokenRequestFlags extends SpeakeasyBase {
    splitChange?: boolean;
}
export declare class IssueTokenRequestMetadataEncryptions extends SpeakeasyBase {
    format?: string;
    key?: string;
    pubkey?: string;
    type?: string;
}
/**
 * Object describing expiration rules of the token
**/
export declare class IssueTokenRequestMetadataRulesExpiration extends SpeakeasyBase {
    locked?: boolean;
    validUntil?: number;
}
export declare class IssueTokenRequestMetadataRulesFeesItems extends SpeakeasyBase {
    address?: string;
    tokenId?: string;
    value?: string;
}
export declare class IssueTokenRequestMetadataRulesFees extends SpeakeasyBase {
    items?: IssueTokenRequestMetadataRulesFeesItems[];
    locked?: boolean;
}
export declare class IssueTokenRequestMetadataRulesHolders extends SpeakeasyBase {
    address?: string;
    locked?: boolean;
}
/**
 * Object describing token rules
**/
export declare class IssueTokenRequestMetadataRules extends SpeakeasyBase {
    expiration?: IssueTokenRequestMetadataRulesExpiration;
    fees?: IssueTokenRequestMetadataRulesFees;
    holders?: IssueTokenRequestMetadataRulesHolders[];
}
export declare class IssueTokenRequestMetadataUrls extends SpeakeasyBase {
    dataHash?: string;
    mimeType?: string;
    name?: string;
    url?: string;
}
export declare class IssueTokenRequestMetadataUserDataMeta extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Metadata set by user on token
**/
export declare class IssueTokenRequestMetadataUserData extends SpeakeasyBase {
    meta?: IssueTokenRequestMetadataUserDataMeta[];
}
/**
 * Object representing all metadata at token issuance
**/
export declare class IssueTokenRequestMetadata extends SpeakeasyBase {
    description?: string;
    encryptions?: IssueTokenRequestMetadataEncryptions[];
    issuer?: string;
    rules?: IssueTokenRequestMetadataRules;
    tokenName?: string;
    urls?: IssueTokenRequestMetadataUrls[];
    userData?: IssueTokenRequestMetadataUserData;
}
export declare class IssueTokenRequestTransfer extends SpeakeasyBase {
    address?: string;
    amount?: number;
}
export declare class IssueTokenRequest extends SpeakeasyBase {
    amount: number;
    divisibility: number;
    fee: number;
    flags?: IssueTokenRequestFlags;
    issueAddress: string;
    metadata?: IssueTokenRequestMetadata;
    reissuable: boolean;
    transfer: IssueTokenRequestTransfer[];
}
