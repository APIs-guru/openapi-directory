import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagFilterList } from "./tagfilterlist";
import { TagFilterList } from "./tagfilterlist";

export enum DicomConfigFilterProfileEnum {
    TagFilterProfileUnspecified = "TAG_FILTER_PROFILE_UNSPECIFIED"
,    MinimalKeepListProfile = "MINIMAL_KEEP_LIST_PROFILE"
,    AttributeConfidentialityBasicProfile = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE"
,    KeepAllProfile = "KEEP_ALL_PROFILE"
,    DeidentifyTagContents = "DEIDENTIFY_TAG_CONTENTS"
}


// DicomConfig
/** 
 * Specifies the parameters needed for de-identification of DICOM stores.
**/
export class DicomConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterProfile" })
  filterProfile?: DicomConfigFilterProfileEnum;

  @Metadata({ data: "json, name=keepList" })
  keepList?: TagFilterList;

  @Metadata({ data: "json, name=removeList" })
  removeList?: TagFilterList;

  @Metadata({ data: "json, name=skipIdRedaction" })
  skipIdRedaction?: boolean;
}
