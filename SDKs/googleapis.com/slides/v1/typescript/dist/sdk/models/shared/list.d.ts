import { SpeakeasyBase } from "../../../internal/utils";
import { NestingLevel } from "./nestinglevel";
/**
 * A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID.
**/
export declare class List extends SpeakeasyBase {
    listId?: string;
    nestingLevel?: Map<string, NestingLevel>;
}
