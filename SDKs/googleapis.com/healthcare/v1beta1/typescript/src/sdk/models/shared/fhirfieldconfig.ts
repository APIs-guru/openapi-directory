import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata } from "./googlecloudhealthcarev1beta1deidentifyfieldmetadata";
import { GoogleCloudHealthcareV1beta1DeidentifyOptions } from "./googlecloudhealthcarev1beta1deidentifyoptions";


export enum FhirFieldConfigProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    KeepAll = "KEEP_ALL",
    Basic = "BASIC",
    CleanAll = "CLEAN_ALL"
}


// FhirFieldConfig
/** 
 * Specifies how to handle the de-identification of a FHIR store.
**/
export class FhirFieldConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldMetadataList", elemType: GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata })
  fieldMetadataList?: GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata[];

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: GoogleCloudHealthcareV1beta1DeidentifyOptions;

  @SpeakeasyMetadata({ data: "json, name=profileType" })
  profileType?: FhirFieldConfigProfileTypeEnum;
}
