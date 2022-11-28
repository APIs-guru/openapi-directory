import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InTotoProvenance } from "./intotoprovenance";
import { SlsaProvenance } from "./slsaprovenance";
import { SlsaProvenanceZeroTwo } from "./slsaprovenancezerotwo";
import { Subject } from "./subject";



// InTotoStatement
/** 
 * Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
**/
export class InTotoStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=predicateType" })
  predicateType?: string;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: InTotoProvenance;

  @SpeakeasyMetadata({ data: "json, name=slsaProvenance" })
  slsaProvenance?: SlsaProvenance;

  @SpeakeasyMetadata({ data: "json, name=slsaProvenanceZeroTwo" })
  slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo;

  @SpeakeasyMetadata({ data: "json, name=subject", elemType: Subject })
  subject?: Subject[];
}
