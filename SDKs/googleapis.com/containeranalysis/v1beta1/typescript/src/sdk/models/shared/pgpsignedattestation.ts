import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PgpSignedAttestationContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    SimpleSigningJson = "SIMPLE_SIGNING_JSON"
}


// PgpSignedAttestation
/** 
 * An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.
**/
export class PgpSignedAttestation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: PgpSignedAttestationContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pgpKeyId" })
  pgpKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}
