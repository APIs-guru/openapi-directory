import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
import { NameIdPair } from "./nameidpair";
import { TunerChannelMapping } from "./tunerchannelmapping";



// ChannelMappingOptionsDto
/** 
 * Channel mapping options dto.
**/
export class ChannelMappingOptionsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mappings", elemType: NameValuePair })
  mappings?: NameValuePair[];

  @SpeakeasyMetadata({ data: "json, name=ProviderChannels", elemType: NameIdPair })
  providerChannels?: NameIdPair[];

  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=TunerChannels", elemType: TunerChannelMapping })
  tunerChannels?: TunerChannelMapping[];
}
