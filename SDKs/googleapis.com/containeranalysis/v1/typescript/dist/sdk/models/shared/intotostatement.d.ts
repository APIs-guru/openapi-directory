import { SpeakeasyBase } from "../../../internal/utils";
import { InTotoProvenance } from "./intotoprovenance";
import { SlsaProvenance } from "./slsaprovenance";
import { SlsaProvenanceZeroTwo } from "./slsaprovenancezerotwo";
import { Subject } from "./subject";
/**
 * Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
**/
export declare class InTotoStatement extends SpeakeasyBase {
    type?: string;
    predicateType?: string;
    provenance?: InTotoProvenance;
    slsaProvenance?: SlsaProvenance;
    slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo;
    subject?: Subject[];
}
