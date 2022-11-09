import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogsPanel
/** 
 * A widget that displays a stream of log.
**/
export class LogsPanel extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=resourceNames" })
  resourceNames?: string[];
}
