import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateIdTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;
}
