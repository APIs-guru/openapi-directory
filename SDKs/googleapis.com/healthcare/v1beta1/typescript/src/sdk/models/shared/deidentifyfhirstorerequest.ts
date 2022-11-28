import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeidentifyConfig } from "./deidentifyconfig";
import { FhirFilter } from "./fhirfilter";



// DeidentifyFhirStoreRequest
/** 
 * Creates a new FHIR store with sensitive information de-identified.
**/
export class DeidentifyFhirStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: DeidentifyConfig;

  @SpeakeasyMetadata({ data: "json, name=destinationStore" })
  destinationStore?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsConfigUri" })
  gcsConfigUri?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceFilter" })
  resourceFilter?: FhirFilter;

  @SpeakeasyMetadata({ data: "json, name=skipModifiedResources" })
  skipModifiedResources?: boolean;
}
