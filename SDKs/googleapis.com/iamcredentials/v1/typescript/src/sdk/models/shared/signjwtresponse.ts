import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignJwtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=signedJwt" })
  signedJwt?: string;
}
