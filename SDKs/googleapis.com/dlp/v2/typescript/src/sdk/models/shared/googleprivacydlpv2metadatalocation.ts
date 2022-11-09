import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2StorageMetadataLabel } from "./googleprivacydlpv2storagemetadatalabel";

export enum GooglePrivacyDlpV2MetadataLocationTypeEnum {
    MetadatatypeUnspecified = "METADATATYPE_UNSPECIFIED"
,    StorageMetadata = "STORAGE_METADATA"
}


// GooglePrivacyDlpV2MetadataLocation
/** 
 * Metadata Location
**/
export class GooglePrivacyDlpV2MetadataLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=storageLabel" })
  storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel;

  @Metadata({ data: "json, name=type" })
  type?: GooglePrivacyDlpV2MetadataLocationTypeEnum;
}
