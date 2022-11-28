import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PgpSignedAttestationContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    SimpleSigningJson = "SIMPLE_SIGNING_JSON"
}
/**
 * An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.
**/
export declare class PgpSignedAttestation extends SpeakeasyBase {
    contentType?: PgpSignedAttestationContentTypeEnum;
    pgpKeyId?: string;
    signature?: string;
}
