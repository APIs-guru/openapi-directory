import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EncryptionInfoEncryptionEntityTypeEnum {
    EncryptionEntityTypeUnknown = "ENCRYPTION_ENTITY_TYPE_UNKNOWN",
    DcmAccount = "DCM_ACCOUNT",
    DcmAdvertiser = "DCM_ADVERTISER",
    DbmPartner = "DBM_PARTNER",
    DbmAdvertiser = "DBM_ADVERTISER",
    AdwordsCustomer = "ADWORDS_CUSTOMER",
    DfpNetworkCode = "DFP_NETWORK_CODE"
}

export enum EncryptionInfoEncryptionSourceEnum {
    EncryptionScopeUnknown = "ENCRYPTION_SCOPE_UNKNOWN",
    AdServing = "AD_SERVING",
    DataTransfer = "DATA_TRANSFER"
}


// EncryptionInfo
/** 
 * A description of how user IDs are encrypted.
**/
export class EncryptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionEntityId" })
  encryptionEntityId?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionEntityType" })
  encryptionEntityType?: EncryptionInfoEncryptionEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionSource" })
  encryptionSource?: EncryptionInfoEncryptionSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
