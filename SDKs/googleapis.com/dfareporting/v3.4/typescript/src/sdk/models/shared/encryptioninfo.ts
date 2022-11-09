import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EncryptionInfoEncryptionEntityTypeEnum {
    EncryptionEntityTypeUnknown = "ENCRYPTION_ENTITY_TYPE_UNKNOWN"
,    DcmAccount = "DCM_ACCOUNT"
,    DcmAdvertiser = "DCM_ADVERTISER"
,    DbmPartner = "DBM_PARTNER"
,    DbmAdvertiser = "DBM_ADVERTISER"
,    AdwordsCustomer = "ADWORDS_CUSTOMER"
,    DfpNetworkCode = "DFP_NETWORK_CODE"
}

export enum EncryptionInfoEncryptionSourceEnum {
    EncryptionScopeUnknown = "ENCRYPTION_SCOPE_UNKNOWN"
,    AdServing = "AD_SERVING"
,    DataTransfer = "DATA_TRANSFER"
}


// EncryptionInfo
/** 
 * A description of how user IDs are encrypted.
**/
export class EncryptionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionEntityId" })
  encryptionEntityId?: string;

  @Metadata({ data: "json, name=encryptionEntityType" })
  encryptionEntityType?: EncryptionInfoEncryptionEntityTypeEnum;

  @Metadata({ data: "json, name=encryptionSource" })
  encryptionSource?: EncryptionInfoEncryptionSourceEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
