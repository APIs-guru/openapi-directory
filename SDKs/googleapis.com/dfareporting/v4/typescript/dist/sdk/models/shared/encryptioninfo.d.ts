import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EncryptionInfoEncryptionEntityTypeEnum {
    EncryptionEntityTypeUnknown = "ENCRYPTION_ENTITY_TYPE_UNKNOWN",
    DcmAccount = "DCM_ACCOUNT",
    DcmAdvertiser = "DCM_ADVERTISER",
    DbmPartner = "DBM_PARTNER",
    DbmAdvertiser = "DBM_ADVERTISER",
    AdwordsCustomer = "ADWORDS_CUSTOMER",
    DfpNetworkCode = "DFP_NETWORK_CODE"
}
export declare enum EncryptionInfoEncryptionSourceEnum {
    EncryptionScopeUnknown = "ENCRYPTION_SCOPE_UNKNOWN",
    AdServing = "AD_SERVING",
    DataTransfer = "DATA_TRANSFER"
}
/**
 * A description of how user IDs are encrypted.
**/
export declare class EncryptionInfo extends SpeakeasyBase {
    encryptionEntityId?: string;
    encryptionEntityType?: EncryptionInfoEncryptionEntityTypeEnum;
    encryptionSource?: EncryptionInfoEncryptionSourceEnum;
    kind?: string;
}
