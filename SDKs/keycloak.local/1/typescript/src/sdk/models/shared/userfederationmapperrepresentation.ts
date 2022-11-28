import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserFederationMapperRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=federationMapperType" })
  federationMapperType?: string;

  @SpeakeasyMetadata({ data: "json, name=federationProviderDisplayName" })
  federationProviderDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
