import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Options } from "./options";


export enum DicomTagConfigProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    MinimalKeepListProfile = "MINIMAL_KEEP_LIST_PROFILE",
    AttributeConfidentialityBasicProfile = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE",
    KeepAllProfile = "KEEP_ALL_PROFILE",
    DeidentifyTagContents = "DEIDENTIFY_TAG_CONTENTS"
}


// DicomTagConfig
/** 
 * Specifies the parameters needed for the de-identification of DICOM stores.
**/
export class DicomTagConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Options;

  @SpeakeasyMetadata({ data: "json, name=profileType" })
  profileType?: DicomTagConfigProfileTypeEnum;
}
