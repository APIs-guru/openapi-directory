import { SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";
/**
 * A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
**/
export declare class GridLayout extends SpeakeasyBase {
    columns?: string;
    widgets?: Widget[];
}
