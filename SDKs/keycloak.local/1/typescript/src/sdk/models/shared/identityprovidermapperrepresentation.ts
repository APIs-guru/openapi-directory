import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IdentityProviderMapperRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=identityProviderAlias" })
  identityProviderAlias?: string;

  @Metadata({ data: "json, name=identityProviderMapper" })
  identityProviderMapper?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
