import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticatorConfigRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
