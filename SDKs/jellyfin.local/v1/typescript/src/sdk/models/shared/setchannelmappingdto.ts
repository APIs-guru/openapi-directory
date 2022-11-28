import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetChannelMappingDto
/** 
 * Set channel mapping dto.
**/
export class SetChannelMappingDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProviderChannelId" })
  providerChannelId: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderId" })
  providerId: string;

  @SpeakeasyMetadata({ data: "json, name=TunerChannelId" })
  tunerChannelId: string;
}
