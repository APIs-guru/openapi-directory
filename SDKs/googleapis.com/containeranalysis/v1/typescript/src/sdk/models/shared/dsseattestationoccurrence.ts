import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Envelope } from "./envelope";
import { InTotoStatement } from "./intotostatement";



// DsseAttestationOccurrence
/** 
 * Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.
**/
export class DsseAttestationOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @SpeakeasyMetadata({ data: "json, name=statement" })
  statement?: InTotoStatement;
}
