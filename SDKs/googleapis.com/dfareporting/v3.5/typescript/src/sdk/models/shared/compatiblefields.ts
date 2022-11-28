import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrossDimensionReachReportCompatibleFields } from "./crossdimensionreachreportcompatiblefields";
import { FloodlightReportCompatibleFields } from "./floodlightreportcompatiblefields";
import { PathReportCompatibleFields } from "./pathreportcompatiblefields";
import { PathToConversionReportCompatibleFields } from "./pathtoconversionreportcompatiblefields";
import { ReachReportCompatibleFields } from "./reachreportcompatiblefields";
import { ReportCompatibleFields } from "./reportcompatiblefields";



// CompatibleFields
/** 
 * Represents a response to the queryCompatibleFields method.
**/
export class CompatibleFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crossDimensionReachReportCompatibleFields" })
  crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields;

  @SpeakeasyMetadata({ data: "json, name=floodlightReportCompatibleFields" })
  floodlightReportCompatibleFields?: FloodlightReportCompatibleFields;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pathAttributionReportCompatibleFields" })
  pathAttributionReportCompatibleFields?: PathReportCompatibleFields;

  @SpeakeasyMetadata({ data: "json, name=pathReportCompatibleFields" })
  pathReportCompatibleFields?: PathReportCompatibleFields;

  @SpeakeasyMetadata({ data: "json, name=pathToConversionReportCompatibleFields" })
  pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields;

  @SpeakeasyMetadata({ data: "json, name=reachReportCompatibleFields" })
  reachReportCompatibleFields?: ReachReportCompatibleFields;

  @SpeakeasyMetadata({ data: "json, name=reportCompatibleFields" })
  reportCompatibleFields?: ReportCompatibleFields;
}
