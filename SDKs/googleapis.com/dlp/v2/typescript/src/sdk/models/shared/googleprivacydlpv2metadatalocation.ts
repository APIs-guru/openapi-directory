import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StorageMetadataLabel } from "./googleprivacydlpv2storagemetadatalabel";


export enum GooglePrivacyDlpV2MetadataLocationTypeEnum {
    MetadatatypeUnspecified = "METADATATYPE_UNSPECIFIED",
    StorageMetadata = "STORAGE_METADATA"
}


// GooglePrivacyDlpV2MetadataLocation
/** 
 * Metadata Location
**/
export class GooglePrivacyDlpV2MetadataLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=storageLabel" })
  storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GooglePrivacyDlpV2MetadataLocationTypeEnum;
}
