import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";



// SectionColumnProperties
/** 
 * Properties that apply to a section's column.
**/
export class SectionColumnProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paddingEnd" })
  paddingEnd?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: Dimension;
}
