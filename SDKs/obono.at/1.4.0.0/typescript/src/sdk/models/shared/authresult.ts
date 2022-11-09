import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=registrierkasseUuid" })
  registrierkasseUuid?: string;
}
