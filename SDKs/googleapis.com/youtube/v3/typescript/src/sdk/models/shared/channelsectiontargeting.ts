import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelSectionTargeting
/** 
 * ChannelSection targeting setting.
**/
export class ChannelSectionTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries?: string[];

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];
}
