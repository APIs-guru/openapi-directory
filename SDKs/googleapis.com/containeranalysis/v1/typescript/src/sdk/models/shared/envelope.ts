import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvelopeSignature } from "./envelopesignature";



// Envelope
/** 
 * MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.
**/
export class Envelope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=payloadType" })
  payloadType?: string;

  @SpeakeasyMetadata({ data: "json, name=signatures", elemType: EnvelopeSignature })
  signatures?: EnvelopeSignature[];
}
