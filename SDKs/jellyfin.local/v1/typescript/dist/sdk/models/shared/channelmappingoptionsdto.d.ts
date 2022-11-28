import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
import { NameIdPair } from "./nameidpair";
import { TunerChannelMapping } from "./tunerchannelmapping";
/**
 * Channel mapping options dto.
**/
export declare class ChannelMappingOptionsDto extends SpeakeasyBase {
    mappings?: NameValuePair[];
    providerChannels?: NameIdPair[];
    providerName?: string;
    tunerChannels?: TunerChannelMapping[];
}
