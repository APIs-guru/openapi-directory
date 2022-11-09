import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TunerChannelMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProviderChannelId" })
  providerChannelId?: string;

  @Metadata({ data: "json, name=ProviderChannelName" })
  providerChannelName?: string;
}
