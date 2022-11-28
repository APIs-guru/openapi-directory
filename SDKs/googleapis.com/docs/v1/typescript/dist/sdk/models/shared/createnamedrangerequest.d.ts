import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
/**
 * Creates a NamedRange referencing the given range.
**/
export declare class CreateNamedRangeRequest extends SpeakeasyBase {
    name?: string;
    range?: Range;
}
