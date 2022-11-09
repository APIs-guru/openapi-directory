import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActivityLogEntry } from "./activitylogentry";


export class ActivityLogEntryQueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.ActivityLogEntry })
  items?: ActivityLogEntry[];

  @Metadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
