import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IdentityProviderMapperRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=identityProviderAlias" })
  identityProviderAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=identityProviderMapper" })
  identityProviderMapper?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
