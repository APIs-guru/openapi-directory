import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameValuePair } from "./namevaluepair";
import { NameIdPair } from "./nameidpair";
import { TunerChannelMapping } from "./tunerchannelmapping";


// ChannelMappingOptionsDto
/** 
 * Channel mapping options dto.
**/
export class ChannelMappingOptionsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mappings", elemType: shared.NameValuePair })
  mappings?: NameValuePair[];

  @Metadata({ data: "json, name=ProviderChannels", elemType: shared.NameIdPair })
  providerChannels?: NameIdPair[];

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @Metadata({ data: "json, name=TunerChannels", elemType: shared.TunerChannelMapping })
  tunerChannels?: TunerChannelMapping[];
}
