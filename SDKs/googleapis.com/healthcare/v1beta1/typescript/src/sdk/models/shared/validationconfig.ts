import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationConfig
/** 
 * Contains the configuration for FHIR profiles and validation.
**/
export class ValidationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableFhirpathValidation" })
  disableFhirpathValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableProfileValidation" })
  disableProfileValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableReferenceTypeValidation" })
  disableReferenceTypeValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableRequiredFieldValidation" })
  disableRequiredFieldValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabledImplementationGuides" })
  enabledImplementationGuides?: string[];
}
