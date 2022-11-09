import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PgpSignedAttestationContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED"
,    SimpleSigningJson = "SIMPLE_SIGNING_JSON"
}


// PgpSignedAttestation
/** 
 * An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.
**/
export class PgpSignedAttestation extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: PgpSignedAttestationContentTypeEnum;

  @Metadata({ data: "json, name=pgpKeyId" })
  pgpKeyId?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;
}
