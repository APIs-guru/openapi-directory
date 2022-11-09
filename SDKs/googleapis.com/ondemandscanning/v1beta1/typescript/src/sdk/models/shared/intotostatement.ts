import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InTotoProvenance } from "./intotoprovenance";
import { SlsaProvenance } from "./slsaprovenance";
import { SlsaProvenanceZeroTwo } from "./slsaprovenancezerotwo";
import { Subject } from "./subject";


// InTotoStatement
/** 
 * Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
**/
export class InTotoStatement extends SpeakeasyBase {
  @Metadata({ data: "json, name=_type" })
  type?: string;

  @Metadata({ data: "json, name=predicateType" })
  predicateType?: string;

  @Metadata({ data: "json, name=provenance" })
  provenance?: InTotoProvenance;

  @Metadata({ data: "json, name=slsaProvenance" })
  slsaProvenance?: SlsaProvenance;

  @Metadata({ data: "json, name=slsaProvenanceZeroTwo" })
  slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo;

  @Metadata({ data: "json, name=subject", elemType: shared.Subject })
  subject?: Subject[];
}
