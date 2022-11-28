import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StorageMetadataLabel } from "./googleprivacydlpv2storagemetadatalabel";
export declare enum GooglePrivacyDlpV2MetadataLocationTypeEnum {
    MetadatatypeUnspecified = "METADATATYPE_UNSPECIFIED",
    StorageMetadata = "STORAGE_METADATA"
}
/**
 * Metadata Location
**/
export declare class GooglePrivacyDlpV2MetadataLocation extends SpeakeasyBase {
    storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel;
    type?: GooglePrivacyDlpV2MetadataLocationTypeEnum;
}
