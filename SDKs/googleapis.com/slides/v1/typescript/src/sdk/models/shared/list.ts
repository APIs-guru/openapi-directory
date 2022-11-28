import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestingLevel } from "./nestinglevel";



// List
/** 
 * A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.
**/
export class List extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listId" })
  listId?: string;

  @SpeakeasyMetadata({ data: "json, name=nestingLevel", elemType: NestingLevel })
  nestingLevel?: Map<string, NestingLevel>;
}
