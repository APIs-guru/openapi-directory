import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metadata
/** 
 * Metadata for a Ruleset.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=services" })
  services?: string[];
}
