import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagFilterList } from "./tagfilterlist";


export enum DicomConfigFilterProfileEnum {
    TagFilterProfileUnspecified = "TAG_FILTER_PROFILE_UNSPECIFIED",
    MinimalKeepListProfile = "MINIMAL_KEEP_LIST_PROFILE",
    AttributeConfidentialityBasicProfile = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE",
    KeepAllProfile = "KEEP_ALL_PROFILE",
    DeidentifyTagContents = "DEIDENTIFY_TAG_CONTENTS"
}


// DicomConfig
/** 
 * Specifies the parameters needed for de-identification of DICOM stores.
**/
export class DicomConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterProfile" })
  filterProfile?: DicomConfigFilterProfileEnum;

  @SpeakeasyMetadata({ data: "json, name=keepList" })
  keepList?: TagFilterList;

  @SpeakeasyMetadata({ data: "json, name=removeList" })
  removeList?: TagFilterList;

  @SpeakeasyMetadata({ data: "json, name=skipIdRedaction" })
  skipIdRedaction?: boolean;
}
