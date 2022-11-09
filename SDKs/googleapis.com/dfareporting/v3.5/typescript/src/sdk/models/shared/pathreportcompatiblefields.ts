import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { Dimension } from "./dimension";


// PathReportCompatibleFields
/** 
 * Represents fields that are compatible to be selected for a report of type "PATH".
**/
export class PathReportCompatibleFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelGroupings", elemType: shared.Dimension })
  channelGroupings?: Dimension[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=pathFilters", elemType: shared.Dimension })
  pathFilters?: Dimension[];
}
