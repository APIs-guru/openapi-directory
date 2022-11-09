import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelSectionTargeting
/** 
 * ChannelSection targeting setting.
**/
export class ChannelSectionTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries" })
  countries?: string[];

  @Metadata({ data: "json, name=languages" })
  languages?: string[];

  @Metadata({ data: "json, name=regions" })
  regions?: string[];
}
