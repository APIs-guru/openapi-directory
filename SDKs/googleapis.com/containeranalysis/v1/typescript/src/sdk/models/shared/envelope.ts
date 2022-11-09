import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvelopeSignature } from "./envelopesignature";


// Envelope
/** 
 * MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.
**/
export class Envelope extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=payloadType" })
  payloadType?: string;

  @Metadata({ data: "json, name=signatures", elemType: shared.EnvelopeSignature })
  signatures?: EnvelopeSignature[];
}
