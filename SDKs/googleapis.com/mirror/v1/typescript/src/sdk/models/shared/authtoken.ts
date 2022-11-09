import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=authToken" })
  authToken?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
