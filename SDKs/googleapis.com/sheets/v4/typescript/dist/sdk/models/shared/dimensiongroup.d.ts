import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";
/**
 * A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.
**/
export declare class DimensionGroup extends SpeakeasyBase {
    collapsed?: boolean;
    depth?: number;
    range?: DimensionRange;
}
