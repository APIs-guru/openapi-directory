import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tokeninfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=issued_to" })
  issuedTo?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=verified_email" })
  verifiedEmail?: boolean;
}
