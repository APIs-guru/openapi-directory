import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestingLevel } from "./nestinglevel";



// ListProperties
/** 
 * The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.
**/
export class ListProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nestingLevels", elemType: NestingLevel })
  nestingLevels?: NestingLevel[];
}
