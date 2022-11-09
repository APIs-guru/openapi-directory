import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { Dimension } from "./dimension";


// PathToConversionReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
**/
export class PathToConversionReportCompatibleFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversionDimensions", elemType: shared.Dimension })
  conversionDimensions?: Dimension[];

  @Metadata({ data: "json, name=customFloodlightVariables", elemType: shared.Dimension })
  customFloodlightVariables?: Dimension[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=perInteractionDimensions", elemType: shared.Dimension })
  perInteractionDimensions?: Dimension[];
}
