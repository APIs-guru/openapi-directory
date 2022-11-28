import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserFederationProviderRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changedSyncPeriod" })
  changedSyncPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullSyncPeriod" })
  fullSyncPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;
}
