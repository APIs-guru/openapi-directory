import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogsPanel
/** 
 * A widget that displays a stream of log.
**/
export class LogsPanel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceNames" })
  resourceNames?: string[];
}
