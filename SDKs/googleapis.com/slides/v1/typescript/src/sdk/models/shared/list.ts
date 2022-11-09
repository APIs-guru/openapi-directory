import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NestingLevel } from "./nestinglevel";


// List
/** 
 * A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.
**/
export class List extends SpeakeasyBase {
  @Metadata({ data: "json, name=listId" })
  listId?: string;

  @Metadata({ data: "json, name=nestingLevel", elemType: shared.NestingLevel })
  nestingLevel?: Map<string, NestingLevel>;
}
