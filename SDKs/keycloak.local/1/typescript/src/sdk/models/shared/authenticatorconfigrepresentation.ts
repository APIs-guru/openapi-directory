import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticatorConfigRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
