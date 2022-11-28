import { SpeakeasyBase } from "../../../internal/utils";
import { CrossDimensionReachReportCompatibleFields } from "./crossdimensionreachreportcompatiblefields";
import { FloodlightReportCompatibleFields } from "./floodlightreportcompatiblefields";
import { PathToConversionReportCompatibleFields } from "./pathtoconversionreportcompatiblefields";
import { ReachReportCompatibleFields } from "./reachreportcompatiblefields";
import { ReportCompatibleFields } from "./reportcompatiblefields";
/**
 * Represents a response to the queryCompatibleFields method.
**/
export declare class CompatibleFields extends SpeakeasyBase {
    crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields;
    floodlightReportCompatibleFields?: FloodlightReportCompatibleFields;
    kind?: string;
    pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields;
    reachReportCompatibleFields?: ReachReportCompatibleFields;
    reportCompatibleFields?: ReportCompatibleFields;
}
