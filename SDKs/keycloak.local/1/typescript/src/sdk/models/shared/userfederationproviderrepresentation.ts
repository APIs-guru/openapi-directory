import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserFederationProviderRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=changedSyncPeriod" })
  changedSyncPeriod?: number;

  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fullSyncPeriod" })
  fullSyncPeriod?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastSync" })
  lastSync?: number;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=providerName" })
  providerName?: string;
}
