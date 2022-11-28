import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metadata
/** 
 * Metadata for a Ruleset.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: string[];
}
