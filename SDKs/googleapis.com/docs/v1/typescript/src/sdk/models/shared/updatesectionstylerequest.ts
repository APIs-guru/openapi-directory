import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Range } from "./range";
import { SectionStyle } from "./sectionstyle";


// UpdateSectionStyleRequest
/** 
 * Updates the SectionStyle.
**/
export class UpdateSectionStyleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=range" })
  range?: Range;

  @Metadata({ data: "json, name=sectionStyle" })
  sectionStyle?: SectionStyle;
}
