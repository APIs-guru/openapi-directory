import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtractionRules } from "./extractionrules";



// EgressControlConfig
/** 
 * Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
**/
export class EgressControlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backends" })
  backends?: string;

  @SpeakeasyMetadata({ data: "json, name=extractionRules" })
  extractionRules?: ExtractionRules;
}
