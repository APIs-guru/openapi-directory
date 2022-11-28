import { SpeakeasyBase } from "../../../internal/utils";
import { Envelope } from "./envelope";
import { InTotoStatement } from "./intotostatement";
/**
 * Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.
**/
export declare class DsseAttestationOccurrence extends SpeakeasyBase {
    envelope?: Envelope;
    statement?: InTotoStatement;
}
