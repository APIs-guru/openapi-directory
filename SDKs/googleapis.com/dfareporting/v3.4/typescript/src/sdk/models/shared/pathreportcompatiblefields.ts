import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";



// PathReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "PATH".
**/
export class PathReportCompatibleFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelGroupings", elemType: Dimension })
  channelGroupings?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=pathFilters", elemType: Dimension })
  pathFilters?: Dimension[];
}
