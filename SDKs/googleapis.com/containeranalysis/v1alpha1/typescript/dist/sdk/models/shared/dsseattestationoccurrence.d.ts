import { SpeakeasyBase } from "../../../internal/utils";
import { Envelope } from "./envelope";
import { InTotoStatement } from "./intotostatement";
/**
 * An occurrence describing an attestation on a resource
**/
export declare class DsseAttestationOccurrence extends SpeakeasyBase {
    envelope?: Envelope;
    statement?: InTotoStatement;
}
