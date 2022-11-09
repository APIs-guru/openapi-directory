import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserFederationMapperRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=federationMapperType" })
  federationMapperType?: string;

  @Metadata({ data: "json, name=federationProviderDisplayName" })
  federationProviderDisplayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
