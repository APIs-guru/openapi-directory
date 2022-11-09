import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtractionRules } from "./extractionrules";


// EgressControlConfig
/** 
 * Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
**/
export class EgressControlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=backends" })
  backends?: string;

  @Metadata({ data: "json, name=extractionRules" })
  extractionRules?: ExtractionRules;
}
