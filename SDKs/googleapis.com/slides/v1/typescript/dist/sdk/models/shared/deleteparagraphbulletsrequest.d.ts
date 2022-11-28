import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { Range } from "./range";
/**
 * Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
**/
export declare class DeleteParagraphBulletsRequest extends SpeakeasyBase {
    cellLocation?: TableCellLocation;
    objectId?: string;
    textRange?: Range;
}
