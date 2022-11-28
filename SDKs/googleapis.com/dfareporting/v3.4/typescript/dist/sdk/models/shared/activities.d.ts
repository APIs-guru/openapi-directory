import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Represents an activity group.
**/
export declare class Activities extends SpeakeasyBase {
    filters?: DimensionValue[];
    kind?: string;
    metricNames?: string[];
}
