import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IdentityProviderRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=addReadTokenRoleOnCreate" })
  addReadTokenRoleOnCreate?: boolean;

  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=firstBrokerLoginFlowAlias" })
  firstBrokerLoginFlowAlias?: string;

  @Metadata({ data: "json, name=internalId" })
  internalId?: string;

  @Metadata({ data: "json, name=linkOnly" })
  linkOnly?: boolean;

  @Metadata({ data: "json, name=postBrokerLoginFlowAlias" })
  postBrokerLoginFlowAlias?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;

  @Metadata({ data: "json, name=storeToken" })
  storeToken?: boolean;

  @Metadata({ data: "json, name=trustEmail" })
  trustEmail?: boolean;
}
