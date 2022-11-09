import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CrossDimensionReachReportCompatibleFields } from "./crossdimensionreachreportcompatiblefields";
import { FloodlightReportCompatibleFields } from "./floodlightreportcompatiblefields";
import { PathReportCompatibleFields } from "./pathreportcompatiblefields";
import { PathReportCompatibleFields } from "./pathreportcompatiblefields";
import { PathToConversionReportCompatibleFields } from "./pathtoconversionreportcompatiblefields";
import { ReachReportCompatibleFields } from "./reachreportcompatiblefields";
import { ReportCompatibleFields } from "./reportcompatiblefields";


// CompatibleFields
/** 
 * Represents a response to the queryCompatibleFields method.
**/
export class CompatibleFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=crossDimensionReachReportCompatibleFields" })
  crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields;

  @Metadata({ data: "json, name=floodlightReportCompatibleFields" })
  floodlightReportCompatibleFields?: FloodlightReportCompatibleFields;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pathAttributionReportCompatibleFields" })
  pathAttributionReportCompatibleFields?: PathReportCompatibleFields;

  @Metadata({ data: "json, name=pathReportCompatibleFields" })
  pathReportCompatibleFields?: PathReportCompatibleFields;

  @Metadata({ data: "json, name=pathToConversionReportCompatibleFields" })
  pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields;

  @Metadata({ data: "json, name=reachReportCompatibleFields" })
  reachReportCompatibleFields?: ReachReportCompatibleFields;

  @Metadata({ data: "json, name=reportCompatibleFields" })
  reportCompatibleFields?: ReportCompatibleFields;
}
