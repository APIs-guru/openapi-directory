import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilter } from "./dimensionfilter";
/**
 * Represents a DimensionValuesRequest.
**/
export declare class DimensionValueRequest extends SpeakeasyBase {
    dimensionName?: string;
    endDate?: Date;
    filters?: DimensionFilter[];
    kind?: string;
    startDate?: Date;
}
