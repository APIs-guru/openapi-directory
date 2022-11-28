import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registrierkasseUuid" })
  registrierkasseUuid?: string;
}
