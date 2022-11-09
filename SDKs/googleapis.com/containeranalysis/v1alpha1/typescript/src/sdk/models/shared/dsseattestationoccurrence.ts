import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Envelope } from "./envelope";
import { InTotoStatement } from "./intotostatement";


// DsseAttestationOccurrence
/** 
 * An occurrence describing an attestation on a resource
**/
export class DsseAttestationOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @Metadata({ data: "json, name=statement" })
  statement?: InTotoStatement;
}
