import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NestingLevel } from "./nestinglevel";


// ListProperties
/** 
 * The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.
**/
export class ListProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=nestingLevels", elemType: shared.NestingLevel })
  nestingLevels?: NestingLevel[];
}
