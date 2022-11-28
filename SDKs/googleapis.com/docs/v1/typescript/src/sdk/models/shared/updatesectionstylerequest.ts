import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { SectionStyle } from "./sectionstyle";



// UpdateSectionStyleRequest
/** 
 * Updates the SectionStyle.
**/
export class UpdateSectionStyleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;

  @SpeakeasyMetadata({ data: "json, name=sectionStyle" })
  sectionStyle?: SectionStyle;
}
