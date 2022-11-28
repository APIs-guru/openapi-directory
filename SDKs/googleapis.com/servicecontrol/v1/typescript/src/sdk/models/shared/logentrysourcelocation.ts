import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogEntrySourceLocation
/** 
 * Additional information about the source code location that produced the log entry.
**/
export class LogEntrySourceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=function" })
  function?: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: string;
}
