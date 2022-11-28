import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FhirOutput
/** 
 * Details about the FHIR store to write the output to.
**/
export class FhirOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fhirStore" })
  fhirStore?: string;
}
