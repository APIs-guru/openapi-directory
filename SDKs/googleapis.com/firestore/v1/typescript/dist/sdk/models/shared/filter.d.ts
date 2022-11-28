import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeFilter } from "./compositefilter";
import { FieldFilter } from "./fieldfilter";
import { UnaryFilter } from "./unaryfilter";
/**
 * A filter.
**/
export declare class Filter extends SpeakeasyBase {
    compositeFilter?: CompositeFilter;
    fieldFilter?: FieldFilter;
    unaryFilter?: UnaryFilter;
}
