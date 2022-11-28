import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Options } from "./options";
export declare enum DicomTagConfigProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    MinimalKeepListProfile = "MINIMAL_KEEP_LIST_PROFILE",
    AttributeConfidentialityBasicProfile = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE",
    KeepAllProfile = "KEEP_ALL_PROFILE",
    DeidentifyTagContents = "DEIDENTIFY_TAG_CONTENTS"
}
/**
 * Specifies the parameters needed for the de-identification of DICOM stores.
**/
export declare class DicomTagConfig extends SpeakeasyBase {
    actions?: Action[];
    options?: Options;
    profileType?: DicomTagConfigProfileTypeEnum;
}
