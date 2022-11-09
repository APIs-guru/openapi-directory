import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";


// SectionColumnProperties
/** 
 * Properties that apply to a section's column.
**/
export class SectionColumnProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=paddingEnd" })
  paddingEnd?: Dimension;

  @Metadata({ data: "json, name=width" })
  width?: Dimension;
}
