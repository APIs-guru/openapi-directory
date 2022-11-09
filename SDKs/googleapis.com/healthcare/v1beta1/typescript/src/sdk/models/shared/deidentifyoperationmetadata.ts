import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FhirOutput } from "./fhiroutput";


// DeidentifyOperationMetadata
/** 
 * Details about the work the de-identify operation performed.
**/
export class DeidentifyOperationMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=fhirOutput" })
  fhirOutput?: FhirOutput;
}
