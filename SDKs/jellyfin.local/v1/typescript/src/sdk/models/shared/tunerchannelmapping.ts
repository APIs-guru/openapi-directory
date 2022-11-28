import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TunerChannelMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderChannelId" })
  providerChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderChannelName" })
  providerChannelName?: string;
}
