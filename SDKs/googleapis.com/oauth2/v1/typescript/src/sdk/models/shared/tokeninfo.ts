import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Tokeninfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=email_verified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=issued_at" })
  issuedAt?: number;

  @Metadata({ data: "json, name=issued_to" })
  issuedTo?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=nonce" })
  nonce?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;

  @Metadata({ data: "json, name=verified_email" })
  verifiedEmail?: boolean;
}
