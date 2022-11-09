import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Signature } from "./signature";

export enum GenericSignedAttestationContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED"
,    SimpleSigningJson = "SIMPLE_SIGNING_JSON"
}


// GenericSignedAttestation
/** 
 * An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.
**/
export class GenericSignedAttestation extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: GenericSignedAttestationContentTypeEnum;

  @Metadata({ data: "json, name=serializedPayload" })
  serializedPayload?: string;

  @Metadata({ data: "json, name=signatures", elemType: shared.Signature })
  signatures?: Signature[];
}
