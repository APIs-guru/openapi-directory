import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeidentifyConfig } from "./deidentifyconfig";


// DeidentifiedStoreDestination
/** 
 * Contains configuration for streaming de-identified FHIR export.
**/
export class DeidentifiedStoreDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: DeidentifyConfig;

  @Metadata({ data: "json, name=store" })
  store?: string;
}
