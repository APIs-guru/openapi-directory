import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";



// NestingLevel
/** 
 * Contains properties describing the look and feel of a list bullet at a given level of nesting.
**/
export class NestingLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bulletStyle" })
  bulletStyle?: TextStyle;
}
