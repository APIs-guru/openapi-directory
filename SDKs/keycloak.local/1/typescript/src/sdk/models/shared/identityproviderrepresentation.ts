import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IdentityProviderRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addReadTokenRoleOnCreate" })
  addReadTokenRoleOnCreate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firstBrokerLoginFlowAlias" })
  firstBrokerLoginFlowAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=internalId" })
  internalId?: string;

  @SpeakeasyMetadata({ data: "json, name=linkOnly" })
  linkOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=postBrokerLoginFlowAlias" })
  postBrokerLoginFlowAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=storeToken" })
  storeToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trustEmail" })
  trustEmail?: boolean;
}
