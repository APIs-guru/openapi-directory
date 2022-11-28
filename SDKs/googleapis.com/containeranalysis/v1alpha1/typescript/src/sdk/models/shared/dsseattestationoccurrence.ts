import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Envelope } from "./envelope";
import { InTotoStatement } from "./intotostatement";



// DsseAttestationOccurrence
/** 
 * An occurrence describing an attestation on a resource
**/
export class DsseAttestationOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @SpeakeasyMetadata({ data: "json, name=statement" })
  statement?: InTotoStatement;
}
