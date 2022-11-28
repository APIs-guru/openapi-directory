import { SpeakeasyBase } from "../../../internal/utils";
import { Signature } from "./signature";
export declare enum GenericSignedAttestationContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    SimpleSigningJson = "SIMPLE_SIGNING_JSON"
}
/**
 * An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.
**/
export declare class GenericSignedAttestation extends SpeakeasyBase {
    contentType?: GenericSignedAttestationContentTypeEnum;
    serializedPayload?: string;
    signatures?: Signature[];
}
