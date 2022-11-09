import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeidentifyConfig } from "./deidentifyconfig";
import { FhirFilter } from "./fhirfilter";


// DeidentifyFhirStoreRequest
/** 
 * Creates a new FHIR store with sensitive information de-identified.
**/
export class DeidentifyFhirStoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: DeidentifyConfig;

  @Metadata({ data: "json, name=destinationStore" })
  destinationStore?: string;

  @Metadata({ data: "json, name=gcsConfigUri" })
  gcsConfigUri?: string;

  @Metadata({ data: "json, name=resourceFilter" })
  resourceFilter?: FhirFilter;

  @Metadata({ data: "json, name=skipModifiedResources" })
  skipModifiedResources?: boolean;
}
