import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FhirOutput } from "./fhiroutput";



// DeidentifyOperationMetadata
/** 
 * Details about the work the de-identify operation performed.
**/
export class DeidentifyOperationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fhirOutput" })
  fhirOutput?: FhirOutput;
}
