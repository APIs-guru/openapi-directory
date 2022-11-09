import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetChannelMappingDto
/** 
 * Set channel mapping dto.
**/
export class SetChannelMappingDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProviderChannelId" })
  providerChannelId: string;

  @Metadata({ data: "json, name=ProviderId" })
  providerId: string;

  @Metadata({ data: "json, name=TunerChannelId" })
  tunerChannelId: string;
}
