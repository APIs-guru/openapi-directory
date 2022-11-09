import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignJwtResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;

  @Metadata({ data: "json, name=signedJwt" })
  signedJwt?: string;
}
