import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Signature } from "./signature";


export enum GenericSignedAttestationContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    SimpleSigningJson = "SIMPLE_SIGNING_JSON"
}


// GenericSignedAttestation
/** 
 * An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.
**/
export class GenericSignedAttestation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: GenericSignedAttestationContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serializedPayload" })
  serializedPayload?: string;

  @SpeakeasyMetadata({ data: "json, name=signatures", elemType: Signature })
  signatures?: Signature[];
}
