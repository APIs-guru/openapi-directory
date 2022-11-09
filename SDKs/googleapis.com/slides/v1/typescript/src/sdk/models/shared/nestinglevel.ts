import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextStyle } from "./textstyle";


// NestingLevel
/** 
 * Contains properties describing the look and feel of a list bullet at a given level of nesting.
**/
export class NestingLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bulletStyle" })
  bulletStyle?: TextStyle;
}
