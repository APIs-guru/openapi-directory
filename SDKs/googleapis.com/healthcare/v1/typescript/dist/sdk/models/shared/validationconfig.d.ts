import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the configuration for FHIR profiles and validation.
**/
export declare class ValidationConfig extends SpeakeasyBase {
    disableFhirpathValidation?: boolean;
    disableProfileValidation?: boolean;
    disableReferenceTypeValidation?: boolean;
    disableRequiredFieldValidation?: boolean;
    enabledImplementationGuides?: string[];
}
