import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authToken" })
  authToken?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
