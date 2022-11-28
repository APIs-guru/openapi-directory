import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata } from "./googlecloudhealthcarev1beta1deidentifyfieldmetadata";
import { GoogleCloudHealthcareV1beta1DeidentifyOptions } from "./googlecloudhealthcarev1beta1deidentifyoptions";
export declare enum FhirFieldConfigProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    KeepAll = "KEEP_ALL",
    Basic = "BASIC",
    CleanAll = "CLEAN_ALL"
}
/**
 * Specifies how to handle the de-identification of a FHIR store.
**/
export declare class FhirFieldConfig extends SpeakeasyBase {
    fieldMetadataList?: GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata[];
    options?: GoogleCloudHealthcareV1beta1DeidentifyOptions;
    profileType?: FhirFieldConfigProfileTypeEnum;
}
