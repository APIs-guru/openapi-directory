import { SpeakeasyBase } from "../../../internal/utils";
import { EnvelopeSignature } from "./envelopesignature";
/**
 * MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.
**/
export declare class Envelope extends SpeakeasyBase {
    payload?: string;
    payloadType?: string;
    signatures?: EnvelopeSignature[];
}
