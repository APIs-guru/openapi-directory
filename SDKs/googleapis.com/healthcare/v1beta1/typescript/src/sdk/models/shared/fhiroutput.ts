import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FhirOutput
/** 
 * Details about the FHIR store to write the output to.
**/
export class FhirOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=fhirStore" })
  fhirStore?: string;
}
