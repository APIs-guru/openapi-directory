import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationConfig
/** 
 * Contains the configuration for FHIR profiles and validation.
**/
export class ValidationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableFhirpathValidation" })
  disableFhirpathValidation?: boolean;

  @Metadata({ data: "json, name=disableProfileValidation" })
  disableProfileValidation?: boolean;

  @Metadata({ data: "json, name=disableReferenceTypeValidation" })
  disableReferenceTypeValidation?: boolean;

  @Metadata({ data: "json, name=disableRequiredFieldValidation" })
  disableRequiredFieldValidation?: boolean;

  @Metadata({ data: "json, name=enabledImplementationGuides" })
  enabledImplementationGuides?: string[];
}
