import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventFilter } from "./eventfilter";
/**
 * DisjunctiveMatchStatement that OR's all contained filters.
**/
export declare class DisjunctiveMatchStatement extends SpeakeasyBase {
    eventFilters?: EventFilter[];
}
