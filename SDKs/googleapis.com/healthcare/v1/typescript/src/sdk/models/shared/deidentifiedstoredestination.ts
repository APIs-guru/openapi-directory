import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeidentifyConfig } from "./deidentifyconfig";



// DeidentifiedStoreDestination
/** 
 * Contains configuration for streaming de-identified FHIR export.
**/
export class DeidentifiedStoreDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: DeidentifyConfig;

  @SpeakeasyMetadata({ data: "json, name=store" })
  store?: string;
}
