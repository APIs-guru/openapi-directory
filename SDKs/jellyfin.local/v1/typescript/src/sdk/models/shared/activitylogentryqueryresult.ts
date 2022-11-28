import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityLogEntry } from "./activitylogentry";



export class ActivityLogEntryQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ActivityLogEntry })
  items?: ActivityLogEntry[];

  @SpeakeasyMetadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
