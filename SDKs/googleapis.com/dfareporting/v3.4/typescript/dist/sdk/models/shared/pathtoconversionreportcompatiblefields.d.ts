import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
**/
export declare class PathToConversionReportCompatibleFields extends SpeakeasyBase {
    conversionDimensions?: Dimension[];
    customFloodlightVariables?: Dimension[];
    kind?: string;
    metrics?: Metric[];
    perInteractionDimensions?: Dimension[];
}
