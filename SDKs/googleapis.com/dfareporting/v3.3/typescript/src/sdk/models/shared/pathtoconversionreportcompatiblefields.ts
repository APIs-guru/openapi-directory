import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";



// PathToConversionReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
**/
export class PathToConversionReportCompatibleFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversionDimensions", elemType: Dimension })
  conversionDimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=customFloodlightVariables", elemType: Dimension })
  customFloodlightVariables?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=perInteractionDimensions", elemType: Dimension })
  perInteractionDimensions?: Dimension[];
}
