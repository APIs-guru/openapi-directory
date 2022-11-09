import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Envelope } from "./envelope";
import { InTotoStatement } from "./intotostatement";


// DsseAttestationOccurrence
/** 
 * Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.
**/
export class DsseAttestationOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @Metadata({ data: "json, name=statement" })
  statement?: InTotoStatement;
}
