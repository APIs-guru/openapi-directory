import { SpeakeasyBase } from "../../../internal/utils";
import { TagFilterList } from "./tagfilterlist";
export declare enum DicomConfigFilterProfileEnum {
    TagFilterProfileUnspecified = "TAG_FILTER_PROFILE_UNSPECIFIED",
    MinimalKeepListProfile = "MINIMAL_KEEP_LIST_PROFILE",
    AttributeConfidentialityBasicProfile = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE",
    KeepAllProfile = "KEEP_ALL_PROFILE",
    DeidentifyTagContents = "DEIDENTIFY_TAG_CONTENTS"
}
/**
 * Specifies the parameters needed for de-identification of DICOM stores.
**/
export declare class DicomConfig extends SpeakeasyBase {
    filterProfile?: DicomConfigFilterProfileEnum;
    keepList?: TagFilterList;
    removeList?: TagFilterList;
    skipIdRedaction?: boolean;
}
